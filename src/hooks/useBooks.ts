import { useEffect, useState } from "react";
import type { Book, CreateBook } from "../types/Book";
import {
    getBooks,
    createBook,
    deleteBook as deleteBookApi,
} from "../services/api";

export function useBooks() {
    const[books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        async function loadBooks() {
            try {
                const books = await getBooks();
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

    return {
        books,
        addBook,
        deleteBook
    };
}
