package DI;

public class ServiceInjector {

    public Client  getClient(){
        Service service = ServiceBar("bar");
        return new Client(service);
    }
}
