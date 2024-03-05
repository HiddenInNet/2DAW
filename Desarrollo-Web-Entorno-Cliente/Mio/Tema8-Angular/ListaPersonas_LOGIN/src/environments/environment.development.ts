import { HttpHeaders } from "@angular/common/http";

export const environment = {

    // .equals()
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

    ENLACE_JWT: "http://localhost/Segundo-trimestre/listaPersonas/javascript/lista_personas_V0/jwt.php",
    ENLACE_LOGIN: "http://localhost/Segundo-trimestre/listaPersonas/javascript/lista_personas_V0/login.php",
    ENLACE_SERVIDOR: "http://localhost/Segundo-trimestre/listaPersonas/javascript/lista_personas_V0/servidor.php",

    cabecera: function () {

        let headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage["JWT"]
            })
        }

        return headers;
    }
};
