package Exercise2;

import java.util.ArrayList;

public class DaoBookImpl implements DaoBook{

    ArrayList <Book> books = new ArrayList<>();

    /**
     * Obtenemos un array con todos los libros disponibles
     * @return ArrayList<Book> books
     */
    @Override
    public ArrayList<Book> getAllBooks() {
        return books;
    }

    /**
     * Obtenemos un libro por su Id
     * @param id
     * @return Book book
     */
    @Override
    public Book getById(int id) {

        Book book = null;

        for ( Book b : books) {
            if (b.getId() == id){
                book = b;
            }
        }

        return book;
    }

    /**
     * Añade un libro al array
     * @param book
     */
    @Override
    public void addBook(Book book) {

        books.add(book);
    }

    /**
     * Actualiza un libro del array
     * @param book
     */
    @Override
    public void update(Book book) {

        Book existBook = getById(book.getId());

        if (existBook != null){
            books.remove(existBook);
            books.add(book);
            System.out.println("Libro actualizado con éxito");
        }else{
            System.out.println("No se ha detectado el libro");
        }
    }

    /**
     * Elimina un libro del array segun su Id
     * @param id
     */
    @Override
    public void remove(int id) {

        for ( Book b : books ) {
            if (b.getId() == id){
                books.remove(b);
                System.out.println("Libro eliminado con éxito");
            }else{
                System.out.println("No se ha detectado ningún libro con esa 'id'");
            }
        }
    }
}
