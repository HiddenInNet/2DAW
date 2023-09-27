import java.sql.Connection;
import java.sql.DriverManager;

public class BaseDeDatos {

    private static String url = "jdbc:mariadb://localhost:3336";

    private static String driver;

    private static final String user = "root";

    private static String psw = "XXXXX";

    /* Creamos el método para conectarnos a la base de datos. Este método
    devolverá un objeto de tipo Connection.*/
    public static Connection Conexion(){
    /*Declaramos una variable para almacenar la cadena de conexión.
    Primero la iniciamos en null.*/
        Connection conex = null;

        //Controlamos la excepciones que puedan surgir al conectarnos a la BBDD
        try {
            //Registrar el driver

            Class.forName(driver);
            //Creamos una conexión a la Base de Datos
            conex = DriverManager.getConnection(url, user, psw);

            // Si hay errores informamos al usuario.
        } catch (Exception e) {
            System.out.println("Error al conectar con la base de datos.\n"
                    + e.getMessage().toString());
        }
        // Devolvemos la conexión.
        return conex;
    }

}
