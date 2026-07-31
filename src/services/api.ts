import axios from "axios";
import type { Book, CreateBook, UpdateBook } from "../types/Book";

const api = axios.create({
    baseURL: "https://crudcrud.com/api/d03ea109add048e38ad0a0b3568fbc64"
});

const BOOKS_ENDPOINT = "/livros";

export async function getBooks(): Promise<Book[]> {
    const response = await api.get<Book[]>(BOOKS_ENDPOINT);

    return response.data;
}

export async function createBook(book: CreateBook): Promise<Book> {
    const response = await api.post<Book>(BOOKS_ENDPOINT, book);

    return response.data;
}

export async function deleteBook(id: string): Promise<void> {
    await api.delete(`${BOOKS_ENDPOINT}/${id}`);
}

export async function updateBook(
    id: string,
    book: UpdateBook
): Promise<void> {

    await api.put(
        `${BOOKS_ENDPOINT}/${id.trim()}`,
        book
    );
}