package Exercise4;

import Exercise4.maquinaria.Locomotora;
import Exercise4.personal.Mecanico;

public class MecanicoInjection {

    public Locomotora getLocomotora(){
        Mecanico mecanico = new Mecanico("pepe",623732612,null);
        return new Locomotora("6247FWB",634,1994,mecanico);
    }
}
