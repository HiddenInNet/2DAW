package Exercise4.personal;

public class Maquinista {

    private String nombreCompleto = "";
    private String dni = "";
    private Double sueldoMensaual = 0.0;
    private String rango = "";

    //  -----[ CONSTRUCTOR ]-----

    public Maquinista(String nombreCompleto, String dni, Double sueldoMensaual, String rango) {
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
        this.sueldoMensaual = sueldoMensaual;
        this.rango = rango;
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

    public Double getSueldoMensaual() {
        return sueldoMensaual;
    }

    public void setSueldoMensaual(Double sueldoMensaual) {
        this.sueldoMensaual = sueldoMensaual;
    }

    public String getRango() {
        return rango;
    }

    public void setRango(String rango) {
        this.rango = rango;
    }
}
