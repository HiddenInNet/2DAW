# Introduccion 
# Caracteristicas
# Instalacion

## Actualizar el sistema

Asegúrate de que tu sistema esté actualizado antes de instalar cualquier paquete. Puedes hacerlo con los siguientes comandos:

` $ sudo apt update`
` $ sudo apt upgrade`

## Instalar Java

GlassFish requiere Java para ejecutarse. Puedes instalar OpenJDK utilizando el siguiente comando:

` $ sudo apt install openjdk-8-jdk`

Asegúrate de configurar las variables de entorno JAVA_HOME y PATH para apuntar a tu instalación de Java.

Para verificar si la ruta es correcta usaremos:

` $ echo $JAVA_HOME`
` $ echo $PATH`

## Descargar GlassFish

Puedes descargar GlassFish desde el sitio oficial de Oracle o utilizando wget directamente desde la línea de comandos. Asegúrate de obtener la URL del archivo binario de GlassFish y utiliza el siguiente comando (reemplaza <URL> con la URL real):

` $ wget -O glassfish.zip <URL>`

## Descomprimir el archivo

Una vez que hayas descargado el archivo ZIP, descomprímelo en el directorio que desees. Puedes hacerlo con el siguiente comando:

` $ unzip glassfish.zip -d /ruta/del/directorio`

Reemplaza "/ruta/del/directorio" con la ruta donde deseas extraer GlassFish.

## Iniciar GlassFish

Puedes iniciar GlassFish ejecutando el siguiente comando:

` $ /ruta/del/directorio/glassfish/bin/asadmin start-domain`

Reemplaza "/ruta/del/directorio" con la ruta donde hayas extraído GlassFish.

## Acceder a la consola de administracion

Puedes acceder a la consola de administración de GlassFish abriendo un navegador y navegando a la siguiente dirección:

` $ http://localhost:4848`

Allí podrás administrar y configurar tu instancia de GlassFish.

## Detener GlassFish

Puedes detener GlassFish ejecutando el siguiente comando:

` $ /ruta/del/directorio/glassfish/bin/asadmin stop-domain`