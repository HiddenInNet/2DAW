//valida un DNI
function validarDni(dni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    if (dni.length != 9) {
        //longitud del DNI no valido
        return false;
    }
    if (dni.charAt(8).toUpperCase() != letras[(dni.substring(0, 8)) % 23]) {
        //letra del DNI no valido
        return false;
    }
    return true;
}

//solo permite escribir letras mayusculas, letras minusculas y espacio
function soloLetras(e) {
    //				letras mayus							letras minus							espacio
    if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122) || e.charCode == 32)) {
        return false;
    }
}

//convierte lo que se escribe a mayusculas
function aMayusculas() {
    this.value = this.value.toUpperCase();
}