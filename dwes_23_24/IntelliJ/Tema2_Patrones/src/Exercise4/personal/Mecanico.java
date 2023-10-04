package Exercise4.personal;

public class Mecanico {

    private String nombreCompleto = "";
    private int telefono = 0;
    private enum Especialidad {FRENOS, HIDRAULICA};
    private Especialidad especialidad;

    //  -----[ CONSTRUCTOR ]-----

    public Mecanico(String nombreCompleto, int telefono, Especialidad especialidad) {
        this.nombreCompleto = nombreCompleto;
        this.telefono = telefono;
        this.especialidad = especialidad;

    }

    //  -----[ GETTERS Y SETTERS ]-----

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
}
