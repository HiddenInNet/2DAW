package DI;

public class Client {

    private Service service = null;

    public Client(Service service){
        this.service = service;
    }

    public Client() {

    }

    public void Saludar(){
        System.out.println("Hola, "+service.getName());
    }

    public void setService(Service service) {
        this.service = service;
    }
}
