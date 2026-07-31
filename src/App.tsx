import { useState } from "react";
import BookForm from "./components/BookForm";
import type { Book } from "./types/Book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  console.log(books);

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
        {books.map((book) => (
          <div key={book.title}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.status}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
