import java.util.ArrayList;

public interface DaoPerson {

    ArrayList<Person> getAllUsers();

    Person getUserById(int id);

    void addUser(Person person);

    void updateUser(Person person);

    void removeUser(int id);
}
