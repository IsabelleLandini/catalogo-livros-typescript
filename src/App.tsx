import BookForm from "./components/BookForm";

type Book ={
  title: string;
  author: string;
  status: string;
};

function App() {

  function addBook(book: Book) {
    console.log(book)
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
      </section>
    </main>
  );
}

export default App;
