import type { Book } from "../types/Book";
import BookItem from "./BookItem";

type BookListProps = {
    books: Book[];
    onDeleteBook: (id: string) => void;
    onUpdateBook: (id:string) => void;
};

function BookList ({ books, onDeleteBook, onUpdateBook }: BookListProps) {
    return (
        <div>
            {books.map((book) => (
                <BookItem
                    key={book._id} 
                    book={book} 
                    onDeleteBook={onDeleteBook}
                    onUpdateBook={onUpdateBook}
                />
            ))}
        </div>
    );
}

export default BookList;
