
function campoNombre(evento) {


    let soloLetras = soloLetrasFunc();
    let mayusculas = mayusculasFunc();

    function soloLetrasFunc() {

        let c = evento.charCode;

        //				minusculas					mayusculas				espacio
        return (((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122)) || (c == 32));
    }

    function mayusculasFunc() {

        evento.value = evento.value.toUpperCase();

    }

    
}
