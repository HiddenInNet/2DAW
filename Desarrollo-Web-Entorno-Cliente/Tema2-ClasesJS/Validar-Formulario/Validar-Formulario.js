// Campo nombre -> Permite solo letras y espacios
function soloLetras(evento) {

    console.log(evento);
    let c = evento.charCode;

    //				minusculas					mayusculas				espacio
    return (((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122)) || (c == 32))
}

// Campo nombre -> Combierte todos los caracteres a mayusculas
function mayusculas() {

    this.value = this.value.toUpperCase();		// this	=> document.getElementById("nombre");		Hace referencia al evento 
}