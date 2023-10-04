package Exercise4.maquinaria;

import Exercise4.personal.Mecanico;

public class Locomotora {

    private String matricula = "";
    private int potencia = 0;
    private int anioFabricacion = 0;
    private Mecanico mecanico = null;

    //  -----[ CONSTRUCTOR ]-----

    public Locomotora(String matricula, int potencia, int anioFabricacion, Mecanico mecanico) {
        this.matricula = matricula;
        this.potencia = potencia;
        this.anioFabricacion = anioFabricacion;
        this.mecanico = mecanico;
    }

    //  -----[ GETTERS Y SETTERS ]-----

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public int getPotencia() {
        return potencia;
    }

    public void setPotencia(int potencia) {
        this.potencia = potencia;
    }

    public int getAnioFabricacion() {
        return anioFabricacion;
    }

    public void setAnioFabricacion(int anioFabricacion) {
        this.anioFabricacion = anioFabricacion;
    }

    public Mecanico getMecanico() {
        return mecanico;
    }

    public void setMecanico(Mecanico mecanico) {
        this.mecanico = mecanico;
    }
}
