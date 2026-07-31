import { useEffect, useState } from "react";
import { 
  createBook, 
  getBooks, 
  deleteBook as deleteBookApi, 
} from "./services/api";
import BookForm from "./components/BookForm";
import type { Book } from "./types/Book";
import BookList from "./components/BookList";


function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const books = await getBooks();
        setBooks(books);
      } catch (error) {
          console.log(error);
      }
    }
    loadBooks();
  }, []);

  async function addBook(book: Book) {
    try {
      const newBook = await createBook(book);

      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook(id:string) {
    try {
      await deleteBookApi(id);

      setBooks((prevBooks) => 
        prevBooks.filter((book) => book._id !== id)
    );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
     
      <h1>Catálogo de Livros</h1>

      <section>
        <h2>Adicionar Livro</h2>
         <BookForm onAddBook={addBook}/>
      </section>

      <section>
        <h2>Lista de Livros</h2>
        <BookList 
          books={books} 
          onDeleteBook={deleteBook}
        />
      </section>
    </main>
  );
}

export default App;
