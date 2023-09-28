package Exercise2;

public class Book {

    // ----- [ Atributos ] -----
    private int id;
    private String title;
    private String Author;
    private int pushYear;

    // ----- [ Constructor ] -----
    public Book(int id, String title, String author, int pushYear) {
        this.id = id;
        this.title = title;
        Author = author;
        this.pushYear = pushYear;
    }

    // ----- [ Getters ] -----
    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return Author;
    }

    public int getPushYear() {
        return pushYear;
    }

    // ----- [ ToString() ] -----
    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", Author='" + Author + '\'' +
                ", pushYear=" + pushYear +
                '}';
    }
}
