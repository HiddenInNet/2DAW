package Exercise4.maquinaria;

import Exercise4.personal.Maquinista;

public class Tren {

    private Locomotora locomotora = null;
    private Maquinista maquinista = null;
    private Vagon[] vagones = null;

    //  -----[ CONSTRUCTOR ]-----

    public Tren(Locomotora locomotora, Maquinista maquinista, Vagon[] vagones) {
        this.locomotora = locomotora;
        this.maquinista = maquinista;
        this.vagones = vagones;
    }

    //  -----[ GETTERS Y SETTERS ]-----

    public Locomotora getLocomotora() {
        return locomotora;
    }

    public void setLocomotora(Locomotora locomotora) {
        this.locomotora = locomotora;
    }

    public Maquinista getMaquinista() {
        return maquinista;
    }

    public void setMaquinista(Maquinista maquinista) {
        this.maquinista = maquinista;
    }

    public Vagon[] getVagones() {
        return vagones;
    }

    public void setVagones(Vagon[] vagones) {
        this.vagones = vagones;
    }
}
