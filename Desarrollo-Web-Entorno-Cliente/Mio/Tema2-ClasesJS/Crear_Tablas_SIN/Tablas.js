
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Genera una tabla
 */
function generarTabla(filas, columnas) {
    console.log("llega a generartabla ese");

    let tabla = "<table>";

    for (let contadorX = 0; contadorX < filas; contadorX++) {

        tabla = tabla + "<tr>";
        for (let contadorY = 0; contadorY < columnas; contadorY++) {

            if (contadorX == 0) {
                tabla = tabla + "<th>Columna " + contadorY + " </th>";
            } else {
                tabla = tabla + "<td>Fila " + contadorX + " columna " + contadorY + " </td>";
            }
        }
        tabla = tabla + "</tr>";
    }

    tabla = tabla + "</table>";

    return tabla;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////