import java.util.ArrayList;

public class DaoPersonImpl implements DaoPerson{

    private final ArrayList<Person> usersList = new ArrayList<>();

    @Override
    public ArrayList<Person> getAllUsers() {

        return usersList;
    }

    @Override
    public Person getUserById(int id) {

        Person person = null;

        for ( Person p : usersList) {
            if (p.getId() == id){
                person = p;
            }
        }

        return person;
    }

    @Override
    public void addUser(Person person) {

        usersList.add(person);

    }

    @Override
    public void updateUser(Person person) {

        Person userExist = getUserById(person.getId());

        if (userExist != null){
            usersList.remove(userExist);
            usersList.add(person);
        }

    }

    @Override
    public void removeUser(int id) {

        usersList.removeIf(p -> p.getId() == id);

    }
}
