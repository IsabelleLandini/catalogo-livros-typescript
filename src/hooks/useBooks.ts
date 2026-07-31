import { useEffect, useState } from "react";
import type { Book, CreateBook, BookStatus, UpdateBook } from "../types/Book";
import {
    getBooks,
    createBook,
    deleteBook as deleteBookApi,
    updateBook as updateBookApi
} from "../services/api";

export function useBooks() {
    // Mantém a lista de livros sincronizada com a interface
    const[books, setBooks] = useState<Book[]>([]);

    // Carrega os livros da API assim que o componente é montado
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

    // Realiza a criação do livro e atualiza o estado local
    async function addBook(book: CreateBook) {
        try {
            const newBook = await createBook(book);

            setBooks((prevBooks) => [...prevBooks, newBook]);
        } catch (error) {
            console.log(error);
        }
    }

    // Remove o livro na API e atualiza a lista local
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
    
    // Alterna o status do livro entre Lido e Não lido
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
