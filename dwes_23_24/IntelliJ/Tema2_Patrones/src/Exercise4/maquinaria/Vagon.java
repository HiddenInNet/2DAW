package Exercise4.maquinaria;

public class Vagon {

    private int cargaMaxima = 0;
    private int cargaActual = 0;
    private String tipoCarga = "";

    //  -----[ CONSTRUCTOR ]-----

    public Vagon(int cargaMaxima, int cargaActual, String tipoCarga) {
        this.cargaMaxima = cargaMaxima;
        this.cargaActual = cargaActual;
        this.tipoCarga = tipoCarga;
    }

    //  -----[ GETTERS Y SETTERS ]-----

    public int getCargaMaxima() {
        return cargaMaxima;
    }

    public void setCargaMaxima(int cargaMaxima) {
        this.cargaMaxima = cargaMaxima;
    }

    public int getCargaActual() {
        return cargaActual;
    }

    public void setCargaActual(int cargaActual) {
        this.cargaActual = cargaActual;
    }

    public String getTipoCarga() {
        return tipoCarga;
    }

    public void setTipoCarga(String tipoCarga) {
        this.tipoCarga = tipoCarga;
    }
}
