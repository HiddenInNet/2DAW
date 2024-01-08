# 1 -> Google Maps API 

Primero de todo debemos obtener una API key, la cual la obtendremos
desde https://console.cloud.google.com/apis/credentials?project=elite-span-407911

Una vez obtenemos la API Key la insertaremos de la siguiente forma en nuestro código:

``` JavaScript
    <script 
            type="text/javascript" 
            src="http://maps.google.com/maps/api/js?key=AIzaSyBY5CuaTmzLXwyn0yWS8NLMVbqWMMSydNc">
    </script>
```

Ya puesta la API Key podemos usar la API como queramos.

## 1.1 -> Crear mapa

Para crear el mapa necesitaremos el div donde lo vamos a colocar
y las opciones que le vamos a pasar al constructor del mapa.

``` JavaScript
    // Seleccionamos donde queremos el mapa
    var divMapa = document.quertSelector("#mapa");

    // Guardamos la posicion donde va a centrarse el mapa
    // Para esto hay dos formas de hacerlo:

    var centro = new google.maps.LatLng(37.41134051634971, -5.983433420925049);

    // O de la siguiente forma

    var centro2 = new { lat: 37.874327, lng: -0.756041 };

    // Una vez hemos establecido donde queremos que se centre 
    // el mapa, creamos las opciones

    var opciones = {
        center: centro,     // El centro que hemos establecido
        zoom: 3             // Cantidad de zoom que tendra al iniciar
    }

    // Por ultimo creamos el mapa
    var mapa = new google.maps.Map(divMapa, opciones);
```

## 1.2 -> Marcadores

Para colocar marcadores en nuestro mapa necesitaremos hacer lo siguiente:

``` JavaScript
    var marcador = new google.maps.Marker({
        position: centro,
        map: mapa,
        title: "Texto",
        animation: google.maps.Animation.BOUNCE
    });
```

## 1.3 -> Ventanas

Para crear ventanas en nuestro mapa usaremos lo siguiente:

``` JavaScript
    var infowindow = new google.maps.InfoWindow({
        map: mapa,
        position: new google.maps.LatLng(37.36081923042877, -5.962697325319323),
        content: "Texto"
    })
```

## 1.4 -> Eventos sobre un marcador

``` JavaScript
    // Añadimos un evento al marcador modificando el zoom
    google.maps.event.addListener(marcador, "click", function () {
        
        mapa.setZoom(mapa.getZoom() + 1);

        var zoomChange = 4;

        var zoomAntes = mapa.getZoom();

        mapa.setZoom(mapa.getZoom() + zoomChange);

        if (mapa.getZoom() == zoomAntes) {
            zoomChange *= -1;
            mapa.setZoom(mapa.getZoom() + zoomChange);
        }

        mapa.setCenter(marcador.getPosition());
    });
```