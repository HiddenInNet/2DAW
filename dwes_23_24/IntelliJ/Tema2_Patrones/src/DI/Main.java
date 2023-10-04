package DI;

public class Main {

    public static void main(String[] args) {

        Client client = new Client(new Service(3, "pepe"));
        client.Saludar();
    }
}
