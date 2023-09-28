package Exercise2;

import java.util.ArrayList;

public interface DaoBook {

    ArrayList <Book> getAllBooks();
    Book getById(int id);
    void addBook(Book book);
    void update(Book book);
    void remove(int id);
}
