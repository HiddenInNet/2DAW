package Exercise4;

import Exercise4.maquinaria.Locomotora;
import Exercise4.maquinaria.Tren;
import Exercise4.maquinaria.Vagon;
import Exercise4.personal.Maquinista;
import Exercise4.personal.Mecanico;

import java.util.ArrayList;

public class LocomotoraInjection {

    public Tren getTren(){
        MecanicoInjection mecanicoInjection = new MecanicoInjection();

        Maquinista maquinista = new Maquinista("Carlos Arguiñano","62348642Q",2563.67,"Medio");

        return new Tren(mecanicoInjection.getLocomotora(),maquinista,new ArrayList<Vagon>());
    }
}
