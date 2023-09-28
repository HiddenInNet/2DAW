package Exercise2;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args){

        // Creamos una instancia
        DaoBook book = new DaoBookImpl();

        // Añadimos los 2 libros
        book.addBook(new Book(1, "Cien años de soledad", "Gabriel García Márquez", 1967));
        book.addBook(new Book(2, "Don Quijote de la Mancha", "Miguel de Cervantes", 1605));

        // Obtenemos el libro con Id = 1 y lo sacamos por pantalla
        System.out.println(book.getById(1));

        // Actualizamos el libro con Id = 1
        book.update(new Book(1, "Cien años de soledad", "Gabriel García Márquez", 1969));

        // Mostramos los libros disponibles dentro del array
        Main.showBooks(book.getAllBooks());

        // Eliminamos el libro con Id = 2
        book.remove(2);

        // Mostramos los libros disponibles dentro del array
        Main.showBooks(book.getAllBooks());
    }

    /**
     * Metodo que nos permite imprimir por pantalla los libros disponibles dentro del array
     * como tambien la cantidad de libros que hay
     * @param books
     */
    public static void showBooks(ArrayList <Book> books){
        for ( Book b : books ) {
            System.out.println(b.toString());
        }
        System.out.println("Se han detectado "+books.size()+" libros." );
    }
}
