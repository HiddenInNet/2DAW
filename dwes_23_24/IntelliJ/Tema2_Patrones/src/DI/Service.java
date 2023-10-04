package DI;

public class Service {

    private int id;
    private String nombre;
    public String getName() {
        return "soy un servicio";
    }

    public Service(int id, String nombre){
        this.id = id;
        this.nombre = nombre;
    }
}
