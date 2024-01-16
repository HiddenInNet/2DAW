
var jsStoreCon = new JsStore.Connection(new Worker("jsStore/jsstore.worker.min.js"));

function BD() {

    console.log("estamos dentro")

    // Difinimos las tablas
    var tblPersonas2 = {
        name: 'personas2',
        columns: {
            id: { primaryKey: true, autoIncrement: true },
            dni: { notNull: true, dataType: "string" },
            nombre: { notNull: true, dataType: "string" },
            apellidos: { notNull: false, dataType: "string" },        // notNull por defecto es 'false'
            fNacimiento: { notNull: true, dataType: "date_time" },
            estatura: { dataType: "number" },
            imagenBlob: { notNUll: false, dataType: "object" },
            imagen64: { notNull: false, dataType: "string" }
        }
    };

    var dbName = "EjercicioIndexedDB";      // Nombre de la base de datos

    var dataBase = {                        // Creamos la base de datos
        name: dbName,                       // Nombre base de datos
        tables: [tblPersonas2]              // La tabla anteriormente formada
    };

    const createDB = async (db) => {
        console.log("llega a la creación. db: ", db);
        try {
            console.log("entra en try")
            const isDbCreated = await jsStoreCon.initDb(db);
            console.log("paso 2. isDbcreated: ", isDbCreated);
            if (isDbCreated) {

                console.log("db created");

                insertarPersonas();


            } else {
                console.log("db Opened");
                seleccionarPersonas();
            }

        } catch (ex) {
            console.log(ex.message);
            alert(ex.message);
        }
    }

    createDB(dataBase);

    const insertarPersonas = async () => {
        let valores = [
            {
                dni: "12345678Z",
                nombre: "Filemón",
                apellidos: "pi",
                fNacimiento: new Date(1958, 0, 20),
                estatura: 1.76,
                imagenBlob: null,
                imagen64: ""
            },
            {
                dni: "46974613T",
                nombre: "Mortadelo",
                apellidos: "no tiene",
                fNacimiento: new Date(1958, 0, 20),
                estatura: 1.85,
                imagenBlob: null,
                imagen64: ""
            }
        ];

        var insertCount = await jsStoreCon.insert({
            into: "personas2",
            values: valores
        });

        console.log(`${insertCount} rows inserted`);
    }


}

async function seleccionarPersonas() {

    var resultado = await jsStoreCon.select({
        from: 'personas2'
    });

    console.log(resultado);
    imprimirDatosTabla(resultado);

}

function imprimirDatosTabla(datosParse) {

    let tab = document.querySelector("#filas_tabla");

    tab.innerHTML = "";

    for (let item of datosParse) {

        let row = tab.insertRow();	// <tr></tr>

        let cell0 = row.insertCell(0);
        cell0.id = item.id;
        cell0.innerHTML = item.id;
        // DNI
        let cell1 = row.insertCell(1);
        cell1.id = item.dni;
        cell1.innerHTML = item.dni;
        // NOMBRE
        let cell2 = row.insertCell(2);
        cell2.id = item.nombre;
        cell2.innerHTML = item.nombre;
        // APELLIDOS
        let cell3 = row.insertCell(3);
        cell3.id = item.apellidos;
        cell3.innerHTML = item.apellidos;

        let cell5 = row.insertCell(4);
        cell5.id = item.fNacimiento;
        cell5.innerHTML = new Date(item.fNacimiento).toDateString();

        let cell4 = row.insertCell(5);
        cell4.id = item.estatura;
        cell4.innerHTML = item.estatura;

        let cell6 = row.insertCell(6);
        cell6.id = item.imagenBlob;
        cell6.innerHTML = item.imagenBlob;

        let cell7 = row.insertCell(7);
        cell7.id = item.imagen64;
        cell7.innerHTML = item.imagen64;

        // Boton de eliminar usuario
        let cell10 = row.insertCell(8);
        let inputdel = document.createElement("input");
        inputdel.type = "button";
        inputdel.value = "del";

        cell10.id = "del" + item.id;
        cell10.appendChild(inputdel);

        inputdel.dataset.idPersona = item.id;
        inputdel.dataset.nombrePersona = item.nombre;

        inputdel.onclick = borrarPersona;

        // Boton de editar usuario
        let cell11 = row.insertCell(9);
        let inputedit = document.createElement("input");
        inputedit.type = "button";
        inputedit.value = "edit";

        cell11.id = "edit" + item.id;
        cell11.appendChild(inputedit);
        inputedit.dataset.idPersona = item.id;

        inputedit.onclick = editarUsuario;

    }
}

async function borrarPersona() {

    //     if (confirm("¿Desea eliminar a '" + this.dataset.nombrePersona + "'?")) {
    //         console.log(`Borrando a ${this.dataset.nombrePersona} con ID: ${this.dataset.idPersona}`);

    //         var rowsDeleted = await jsStoreCon.remove({
    //             from: "personas2",
    //             where: {
    //                 id: this.dataset.idPersona
    //             }
    //         });
    //         //results will contains no of rows deleted.
    //         console.log(rowsDeleted);
    //     };
}

async function editarUsuario() {

    console.log(`dentro de editar usuario con id = ${this.dataset.idPersona}`)

    var resultado = await jsStoreCon.select({
        from: 'personas2',
        where: {
            id: parseInt(this.dataset.idPersona)
        }
    });

    console.log(resultado);

    document.querySelector("#dni").value = resultado.dni;

}