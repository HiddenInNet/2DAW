
function BD() {
    var jsStoreCon = new JsStore.Connection(new Worker("jsStore/jsstore.worker.min.js"));

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
                console.log("db Opened")
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
