import dao.dao_empleados;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        System.out.println("Lista de empleados:");
        System.out.println(dao_empleados.getEmpleados());

    }
}