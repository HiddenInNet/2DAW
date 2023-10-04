package DI;

public class Main {

    public static void main(String[] args) {

        ServiceInjector injector = new ServiceInjector();

        Client client = injector.
        Service service = new Service(3, "servicio 1");
        client.setService(service);
        client.Saludar();
    }
}
