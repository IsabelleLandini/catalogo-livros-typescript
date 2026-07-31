import type { Book } from "../types/Book";
import BookItem from "./BookItem";

type BookListProps = {
    books: Book[];
};

function BookList ({ books }: BookListProps) {
    return (
        <div>
            {books.map((book) => (
                <BookItem
                    key={book.title} 
                    book={book} 
                />
            ))}
        </div>
    );
}

export default BookList;
