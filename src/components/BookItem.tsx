import type { Book } from "../types/Book";

type BookItemProps = {
    book: Book;
    onDeleteBook: (id: string) => void;
};

function BookItem({ book, onDeleteBook }: BookItemProps) {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.status}</p>
            <button onClick={() => onDeleteBook(book._id)}>
                Remover
            </button>
        </div>
    );
}

export default BookItem;

