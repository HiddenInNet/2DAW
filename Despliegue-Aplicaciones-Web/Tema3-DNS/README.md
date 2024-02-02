# Servicio DNS

__Enunciado ejemplo__

Si nuestra red es (**123.75.75.0/24**)

Queremos tener el servidor Web en la IP : (**123.75.75.250**)
Y un servidor de correo electronico en : (**123.75.75.200**)

Vamos atener 3 equipos conectados a la red, los cuales queremos que tengan las primeras IP's :

**123.75.75.1**
**123.75.75.2**
**123.75.75.3**

Nuestro servidor se llamará **servidor.sev**
Nuestra máquina se llama **david**

> Para saber el nombre de nuestra máquina usaremos el comando:
>
> ``$ hostname``

## Configuraciones iniciales
Para configurar nuestro servicio DNS usaremos **Bind9**

`$ sudo apt install bind9`

Instalaremos a su vez **nettools** junto a **dnsutils**

`$ sudo apt install nettools`

`$ sudo apt install dnsutils`

Una vez hemos instalado todo lo necesario debemos configurar el fichero dentro de:

``/etc/netplan/00-installer-config.yaml``

Este fichero lo deberemos configurar de la siguiente forma:

``` yaml
#This is the network config written by 'subiquity'
network:
  ethernets:
    ens18:
      dhcp4: no
      addresses: [IP / mascara]
      routes:
          - to: default
            via: puerta_enlace # en este caso la misma que la IP
      nameservers:
          addresses: [DNS] # en este caso el mismo que la IP
  version: 2
```

Una vez configurado debemos probar que funciona, para eso usaremos:

``$ sudo netplan try ``

Si todo está correcto podemos aplicarlo con:

``$ sudo netplan apply``

## Configuracion DNS

Una vez hemos terminado con las configuraciones iniciales pasaremos a configurar nuestro DNS. Comenzaremos configurando el fichero situado en:

``/etc/bind/named.conf.local``

En el cual configuraremos las zonas directas e inversas. En este fichero deberemos poner:

``` local
zone "servidor.sev" {
  type master;
  file "/etc/bind/servidor.sev";
};

zone "❗75.75.123❗.in-addr.arpa" {
  type master;
  file "/etc/bind/inversa.❗75.75.123❗";
};


```

>[❗IP❗] => Es nuestra porcion de red, es decir la que no cambia según nuestra máscara de red (hay que tener en cuenta que esta se debe escribir en las zonas inversas al contrario)
>
>Por ejemplo si contamos con la siguiente __IP__ (__192.168.2.2/24__), nuestra porción de red serán los 3 primeros octetos (__192.168.2__) y tendríamos que colocarla al revés (__2.168.192__)

Una vez configurado el fichero anterior pasaremos a configurar la zona directa, la cual debemos crear en la ruta que le hemos indicado en el fichero anterior. Para ello usaremos:

``$ sudo nano /etc/bind/servidor.sev``

Dentro de este fichero debemos introducir lo siguiente:

``` 
$ttl 3600
servidor.sev.   IN   SOA   david.   info.servidor.sev. (
        fechaHora
        3600
        600
        1209600
        3600)

servidor.sev.           IN      NS      david.
david.servidor.sev.     IN      A       123.75.75.250
correo.servidor.sev.    IN      A       123.75.75.200
equipo1.servidor.sev.   IN      A       123.75.75.1
equipo2.servidor.sev.   IN      A       123.75.75.2
equipo3.servidor.sev.   IN      A       123.75.75.3

www.servidor.sev.       IN      CNAME   david.servidor.sev.
mail.servidor.sev.      IN  MX  10      correo.servidor.sev.  
```

Una vez tenemos configurada la zona directa pasremos a configurar la zona inversa, para ello configuraremos el fichero de la siguiente forma:

``$ sudo nano /etc/bind/inversa.123.75.75``

Donde pondremos lo siguiente:

```
$ttl 3600
75.75.123.in-addr.arpa  IN  SOA   david.  info.servidor.sev. (
        fechaHora
        3600
        600
        1209600
        3600)

75.75.123.in-addr.arpa.       IN    NS    david.
250.75.75.123.in-addr.arpa.   IN    PTR   david.servidor.sev.
200.75.75.123.in-addr.arpa.   IN    PTR   correo.servidor.sev.
1.75.75.123.in-addr.arpa.     IN    PTR   equipo1.servidor.sev.
2.75.75.123.in-addr.arpa.     IN    PTR   equipo2.servidor.sev.
3.75.75.123.in-addr.arpa.     IN    PTR   equipo3.servidor.sev.
```

Para checkear las zonas que hemos creado debemos usar los siguientes comandos:

* Para el fichero de configuracion:
``$ sudo named-checkconf /etc/bind/named.conf.local``

* Para la zona directa e inversa:
``$ sudo named-checkzone servidor.sev /etc/bind/servidor.sev``
``$ sudo named-checkzone 75.75.123.in-addr.arpa /etc/bind/inversa.123.75.75``