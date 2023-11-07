
let peticion_http;

function pedirPersonajes() {
    // Obtener la instancia del objeto XMLHttpRequest
    peticion_http = new XMLHttpRequest();
    // Preparar la funcion de respuesta
    peticion_http.onreadystatechange = muestraPersonajes;
    // Realizar peticion HTTP
    peticion_http.open('GET', 'https://www.breakingbadapi.com/api/characters/');
    peticion_http.send(null);
}

function muestraPersonajes() {
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            console.log(JSON.parse(peticion_http.responseText));
            llenaTabla(JSON.parse(peticion_http.responseText), document.getElementById("cuerpoPersonajes"));
        }
    }
}