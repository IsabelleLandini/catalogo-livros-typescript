import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { useBooks } from "./hooks/useBooks";
import "./App.css";

function App() {
  // Hook responsável pelo gerenciamento das operações dos livros
  const {
    books, 
    addBook, 
    deleteBook, 
    updateBook
  } = useBooks();

 
  return (
    <main className="container">

      <header className="header">
        <h1>📚 Catálogo de Livros</h1>
        <p>Organize sua biblioteca pessoal</p>
      </header>

      <section className="form-section">
        <div className="section-title">
          <h2>Adicionar Livro</h2>
        </div>
        <BookForm onAddBook={addBook}/>
      </section>

      <section className="books-section">
        <div className="section-title">
          <h2>Lista de Livros</h2>
          
          <span>
            {books.length} livros
          </span>
        </div>
       
        <BookList 
          books={books} 
          onDeleteBook={deleteBook}
          onUpdateBook={updateBook}
        />
      </section>
    </main>
  );
}

export default App;
