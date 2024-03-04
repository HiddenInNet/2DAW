export const environment = {

    compararObjetos: function (a: any, b: any) {

        return JSON.stringify(a) === JSON.stringify(b);
    },

    SeleccionarObj: function (lista: object[], obj: object) {
        var res;    //respuesta
        lista.forEach(valor => {
            if (environment.compararObjetos(valor, obj)) {
                res = valor;
            }
        });
        return res;
    },

    SeleccionarObjArray: function (lista: Array<object>, objE: Array<object>) {
        var res = new Array();
        objE.forEach(ele => {
            lista.forEach(valor => {
                if (environment.compararObjetos(valor, ele)) {
                    res.push(valor);
                }
            })
        });
        return res;
    },

    ENLACE_API: "http://localhost/serviciosweb/cine/servicios.php", 
};
