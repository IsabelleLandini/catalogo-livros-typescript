import type { Book } from "../types/Book";

type BookItemProps = {
    book: Book;
    onDeleteBook: (id: string) => void;
    onUpdateBook: (id: string) => void;
};

// Componente responsável por exibir um único livro
function BookItem({ 
    book, 
    onDeleteBook,
    onUpdateBook 
}: BookItemProps) {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.status}</p>
            <button onClick={() => book._id && onDeleteBook(book._id)}>
               ❌ Remover
            </button>
            <button onClick={() => book._id && onUpdateBook(book._id)}>
                🔄 Alterar status
            </button>
        </div>
    );
}

export default BookItem;

