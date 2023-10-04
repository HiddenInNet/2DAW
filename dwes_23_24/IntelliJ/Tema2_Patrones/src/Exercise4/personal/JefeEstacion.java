package Exercise4.personal;

public class JefeEstacion {

    private String nombreCompleto = "";
    private String dni = "";

    //  -----[ CONSTRUCTOR ]-----

    public JefeEstacion(String nombreCompleto, String dni) {
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
    }

    //  -----[ GETTERS Y SETTERS ]-----
    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }
}
