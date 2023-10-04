package DI;

public class Main {

    public static void main(String[] args) {

        Client client = new Client();
        Service service = new Service(3, "servicio 1");
        client.setService(service);
        client.Saludar();
    }
}
