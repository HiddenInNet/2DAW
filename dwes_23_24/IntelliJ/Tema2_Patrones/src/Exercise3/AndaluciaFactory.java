package Exercise3;

public class AndaluciaFactory extends ElementoAndaluzFactory {

    public ElementoAndaluz createElementoAndaluz(String tipo){
        if(tipo.equals("flamenco")){
            return new Flamenco();
        }else if(tipo.equals("gazpacho")){
            return new Gazpacho();
        } else if (tipo.equals("FeriaDeAbril")) {
            return new FeriaDeAbril();
        }

        return null;
    }

}
