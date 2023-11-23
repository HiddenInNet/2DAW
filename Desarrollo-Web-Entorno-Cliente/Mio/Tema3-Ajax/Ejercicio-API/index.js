//https://www.frankfurter.app/

var datosTodasMonedas;
var infoAdicional;

// Uso una API hecho por el Banco Central Europeo llamada "frankfurter"

function peticionAJAX(url) {
  var peticion = new XMLHttpRequest();

  peticion.open("GET", url, true);
  peticion.send();

  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 200) {
      var responseData = JSON.parse(peticion.responseText);

      datosTodasMonedas = responseData;
      console.log(responseData);

      imprimirValoresIniciales();
      monedasDisponibles(responseData);
      completarSelect(responseData);
    }
  };
}

function peticionAJAXgeneral(url) {
  var peticion = new XMLHttpRequest();

  peticion.open("GET", url, true);
  peticion.send();

  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 200) {
      var data = JSON.parse(peticion.responseText);

      console.log(data);

      imprimirValoresCambio();
      resultadoCambio(data);
    }
  };
}

function resultadoCambio(data) {
  var tabla = document.querySelector("#datos");

  // Verificar si ya existe un tbody y, en ese caso, eliminar su contenido
  var tbodyAPI = document.getElementById("infoAPI");
  if (tbodyAPI) {
    tbodyAPI.innerHTML = "";
  } else {
    tbodyAPI = document.createElement("tbody");
    tbodyAPI.id = "infoAPI";
    tabla.appendChild(tbodyAPI);
  }

  // Acceder a la propiedad 'rates' del objeto JSON
  var tasas = data.rates;

  // Recorrer las tasas con un bucle for...in
  for (var moneda in tasas) {
    if (tasas.hasOwnProperty(moneda)) {
      // Obtener la inicial de la moneda y la cantidad
      var inicial = moneda;
      var cantidad = tasas[moneda];

      // Crear la fila de la tabla
      var fila = document.createElement("tr");
      fila.id = inicial;

      // Crear celdas y asignar contenido
      var celdaCantidad = document.createElement("td");
      celdaCantidad.id = "cantidad";
      celdaCantidad.textContent = cantidad;

      var celdaMoneda = document.createElement("td");
      celdaMoneda.id = "moneda";
      celdaMoneda.textContent = inicial;

      var celdaDetalles = document.createElement("td");
      celdaDetalles.classList.add("detalles");
      celdaDetalles.id = "detalles-" + inicial;

      // Crear el enlace y asignar la función onclick
      var enlace = añadirEnlace(inicial);
      celdaDetalles.appendChild(enlace);

      // Agregar celdas a la fila
      fila.appendChild(celdaCantidad);
      fila.appendChild(celdaMoneda);
      fila.appendChild(celdaDetalles);

      // Agregar la fila al tbody
      tbodyAPI.appendChild(fila);
    }
  }
}

function añadirEnlace(inicial) {
  var enlace = document.createElement("a");
  enlace.href = "#";
  enlace.innerHTML = "[====]";

  var enlacePrecios =
    "https://api.frankfurter.app/2020-01-01..2020-01-31?to=" + inicial;

  // Se le añade la función onclick a los enlaces de los detalles
  enlace.onclick = function () {
    mostrarDetalles(enlacePrecios);
  };

  return enlace;
}

function mostrarDetalles(url) {
  // Borro la tabla anterior si hay
  var tablaAd = document.querySelector("#detalles");
  tablaAd.innerHTML = "";

  // Implementa la lógica para mostrar detalles según tu necesidad
  console.log("Mostrando detalles para: " + url);

  // Obtener el div con id="detalles" si ya existe
  var detallesDiv = document.getElementById("detalles");

  // Verificar si el div no existe y crearlo si es necesario
  if (!detallesDiv) {
    detallesDiv = document.createElement("div");
    detallesDiv.id = "detalles";
    // Agregar el div al cuerpo del documento o a algún otro contenedor según tus necesidades
    document.body.appendChild(detallesDiv);
  }

  // Crear la tabla
  var tablaDetalles = document.createElement("table");

  // Crear la cabecera de la tabla
  var cabecera = tablaDetalles.createTHead();
  var filaCabecera = cabecera.insertRow();
  var thFecha = document.createElement("th");
  thFecha.textContent = "Fecha";
  filaCabecera.appendChild(thFecha);
  var thValor = document.createElement("th");
  thValor.textContent = "Valor";
  filaCabecera.appendChild(thValor);

  // Simulación de datos de ejemplo
  var datosEjemplo = [
    { fecha: "2020-01-01", valor: 100 },
    { fecha: "2020-01-02", valor: 150 },
    { fecha: "2020-01-03", valor: 120 },
  ];

  // Crear el cuerpo de la tabla
  var cuerpo = tablaDetalles.createTBody();
  datosEjemplo.forEach(function (dato) {
    var fila = cuerpo.insertRow();
    var celdaFecha = fila.insertCell();
    celdaFecha.textContent = dato.fecha;
    var celdaValor = fila.insertCell();
    celdaValor.textContent = dato.valor;
  });

  // Limpiar el contenido existente del div antes de agregar la nueva tabla
  detallesDiv.innerHTML = "";

  // Agregar la tabla al div contenedor
  detallesDiv.appendChild(tablaDetalles);
}

function pedirDetalles(url) {
  var peticion = new XMLHttpRequest();

  peticion.open("GET", url, true);
  peticion.send();

  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 200) {
      var responseData = JSON.parse(peticion.responseText);

      infoAdicional = responseData;
    }
  };
}

function recogeInput() {
  var tabla = document.getElementById("datos");
  var tablaAd = document.getElementById("detalles");
  tabla.innerHTML = "";
  tablaAd.innerHTML = "";

  var valorInput = document.getElementById("cifra").value;
  var valorSelect = document.getElementById("seleccion-divisas").value;

  var url =
    "https://api.frankfurter.app/latest?from=" +
    valorSelect +
    "&amount=" +
    valorInput;

  console.log(valorInput, valorSelect);
  console.log(url);

  peticionAJAXgeneral(url);
}

function monedasDisponibles(responseData) {
  var tabla = document.querySelector("#datos");
  var tbody = document.createElement("tbody");
  tbody.id = "infoAPI";

  // Asignar valores a las celdas

  tabla.appendChild(tbody);

  var tbodyAPI = document.getElementById("infoAPI");

  for (var atributo in responseData) {
    if (responseData.hasOwnProperty(atributo)) {
      // Obtener el atributo y el valor
      var valor = responseData[atributo];

      // Imprimir el atributo y el valor en la consola
      //console.log("Atributo: " + atributo + ", Valor: " + valor);

      var innerHTML =
        "<tr id=" +
        atributo +
        ">" +
        '<td id="cantidad"></td>' +
        '<td id="moneda">' +
        atributo +
        "</td>" +
        '<td id="nombreCompleto">' +
        valor +
        "</td>" +
        "</tr>";

      tbodyAPI.innerHTML += innerHTML;
    }
  }
}

function imprimirValoresIniciales() {
  // <thead>
  //    <tr>
  //      <th>Cantidad</th>
  //      <th>Moneda</th>
  //      <th>Nombre Completo</th>
  //    </tr>
  // </thead>

  var cantidad = "Cantidad";
  var moneda = "Moneda";
  var nombreCompleto = "Nombre Completo";

  var $tabla = document.querySelector("#datos");

  var $thead = document.createElement("thead");

  var $th1 = document.createElement("th");
  $th1.id = "cantidad-tabla";

  var $th2 = document.createElement("th");
  $th2.id = "moneda-tabla";

  var $th3 = document.createElement("th");
  $th3.id = "nombreCompleto-tabla";

  var $fila = document.createElement("tr");
  var $columna = document.createElement("td");

  $tabla.appendChild($thead);
  $thead.appendChild($fila);
  $fila.appendChild($th1);
  $th1.innerHTML = cantidad;
  $fila.appendChild($th2);
  $th2.innerHTML = moneda;
  $fila.appendChild($th3);
  $th3.innerHTML = nombreCompleto;
}

function imprimirValoresCambio() {
  // <thead>
  //    <tr>
  //      <th>Cantidad</th>
  //      <th>Moneda</th>
  //      <th>Detalles</th>
  //    </tr>
  // </thead>

  var cantidad = "Cantidad";
  var moneda = "Moneda";
  var nombreCompleto = "Detalles";

  var $tabla = document.querySelector("#datos");

  var $thead = document.createElement("thead");

  var $th1 = document.createElement("th");
  $th1.id = "cantidad-tabla";

  var $th2 = document.createElement("th");
  $th2.id = "moneda-tabla";

  var $th3 = document.createElement("th");
  $th3.id = "nombreCompleto-tabla";

  var $fila = document.createElement("tr");
  var $columna = document.createElement("td");

  $tabla.appendChild($thead);
  $thead.appendChild($fila);
  $fila.appendChild($th1);
  $th1.innerHTML = cantidad;
  $fila.appendChild($th2);
  $th2.innerHTML = moneda;
  $fila.appendChild($th3);
  $th3.innerHTML = nombreCompleto;
}

function completarSelect(responseData) {
  var select = document.getElementById("seleccion-divisas");

  for (var atributo in responseData) {
    if (responseData.hasOwnProperty(atributo)) {
      // Obtener el atributo y el valor
      var valor = responseData[atributo];

      // Imprimir el atributo y el valor en la consola
      //console.log("Atributo: " + atributo + ", Valor: " + valor);

      var innerHTML =
        "<option value=" + atributo + ">" + atributo + "</option>";

      select.innerHTML += innerHTML;
    }
  }
}
