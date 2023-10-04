package DI;

public class Client {

    private Service service = null;

    public Client(Service service){
        this.service = service;
    }

    public void Saludar(){
        System.out.println("Hola, "+service.getName());
    }
}
