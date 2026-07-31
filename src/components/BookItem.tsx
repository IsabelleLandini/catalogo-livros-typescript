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
        <div className="book-card">
            <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <span className="book-status">
                    {book.status}
                </span>
            </div>

            <div className="book-actions">
                <button 
                    className="edit-button"
                    onClick={() => book._id && onUpdateBook(book._id)}>
                    🔄 Alterar status
                </button>
                <button 
                    className="delete-button"
                    onClick={() => book._id && onDeleteBook(book._id)}>
                    ❌ Remover
                </button>
            </div>
        </div>
    );
}

export default BookItem;

