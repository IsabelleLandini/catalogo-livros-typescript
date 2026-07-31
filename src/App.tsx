import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { useBooks } from "./hooks/useBooks";

function App() {
  const {books, addBook, deleteBook, updateBook} = useBooks();

 
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
          onUpdateBook={updateBook}
        />
      </section>
    </main>
  );
}

export default App;
