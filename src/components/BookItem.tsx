import type { Book } from "../types/Book";

type BookItemProps = {
    book: Book;
};

function BookItem({ book }: BookItemProps) {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.status}</p>
        </div>
    );
}

export default BookItem;

