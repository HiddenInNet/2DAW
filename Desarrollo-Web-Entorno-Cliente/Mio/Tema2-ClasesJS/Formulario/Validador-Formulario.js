
function campoNombre(evento) {


    let soloLetras = soloLetrasFunc();
    this.value = mayusculasFunc();

    function soloLetrasFunc() {

        let c = evento.charCode;

        //				minusculas					mayusculas				espacio
        return (((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122)) || (c == 32));
    }

    function mayusculasFunc() {

        this.value = this.value.toUpperCase();

    }

}
