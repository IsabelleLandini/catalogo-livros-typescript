import { useState } from "react";
import BookForm from "./components/BookForm";
import type { Book } from "./types/Book";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  function addBook(book: Book) {
    setBooks((prevBooks) => [...prevBooks, book]);
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
        <BookList books={books} />
      </section>
    </main>
  );
}

export default App;
