import { useEffect, useState } from "react";
import type { Book, CreateBook, BookStatus, UpdateBook } from "../types/Book";
import {
    getBooks,
    createBook,
    deleteBook as deleteBookApi,
    updateBook as updateBookApi
} from "../services/api";

export function useBooks() {
    const[books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        async function loadBooks() {
            try {
                const books = await getBooks();
                console.log("API retornou", books)
                setBooks(books);
            } catch (error) {
                console.log(error);
            }
        }
        loadBooks();
    }, []);

    async function addBook(book: CreateBook) {
        try {
            const newBook = await createBook(book);

            setBooks((prevBooks) => [...prevBooks, newBook]);
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteBook(id:string) {
        try {
            await deleteBookApi(id);

            setBooks((prevBooks) => 
                prevBooks.filter((book) => book._id !== id)
            );
        } catch (error) {
            console.log(error);
        }
    }

    async function updateBook(id: string) {
        try {
            const book = books.find(
                (book) => book._id === id
            );

            if (!book) return;

            const newStatus: BookStatus = 
                book.status === "Lido" 
                    ? "Não lido"
                    : "Lido";

            const updatedBook: UpdateBook = {
                title: book.title,
                author: book.author,
                status: newStatus
            };

            await updateBookApi(id,updatedBook);

            setBooks((prevBooks) =>
                prevBooks.map((book) =>
                    book._id === id
                        ? {
                            ...book,
                            ...updateBook
                        }
                        : book
                )
            );
        } catch(error) {
            console.log(error);
        }
    }

    return {
        books,
        addBook,
        deleteBook,
        updateBook
    };
}
