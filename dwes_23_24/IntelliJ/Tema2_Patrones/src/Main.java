import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        DaoPerson daoPerson = new DaoPersonImpl();

        // Agregar personas
        daoPerson.addUser(new Person(1, "David", 19));
        daoPerson.addUser(new Person(2, "Manuel", 46));
        daoPerson.addUser(new Person(3, "Pablo", 38));


        // Actualizar persona
        daoPerson.updateUser(new Person(2, "Paco", 20));

        // Borrar persona por id
        daoPerson.removeUser(2);

        ArrayList<Person> userList = daoPerson.getAllUsers();

        for ( Person p : userList ) {
            System.out.println(p.toString());
        }
    }
}