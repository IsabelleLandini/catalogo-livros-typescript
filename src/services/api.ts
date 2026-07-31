import axios from "axios";
import type { Book } from "../types/Book";

export const API_URL = "https://crudcrud.com/api/d03ea109add048e38ad0a0b3568fbc64/livros";

export async function getBooks(): Promise<Book[]> {
    const response = await axios.get<Book[]>(API_URL);

    return response.data;
}

export async function createBook(book: Book): Promise<Book> {
    const response = await axios.post<Book>(API_URL, book);

    return response.data;
}

export async function deleteBook(id: string): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
}