package DI;

public class Service {

    private int id = 0;
    private String nombre = "";
    public String getName() {
        return "soy "+ this.nombre;
    }

    public Service(int id, String nombre){
        this.id = id;
        this.nombre = nombre;
    }
}
