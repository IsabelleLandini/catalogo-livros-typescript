import axios from "axios";
import type { Book, CreateBook, UpdateBook } from "../types/Book";

// Instância configurada do Axios para centralizar a comunicação com a API
const api = axios.create({
    baseURL: "https://crudcrud.com/api/d03ea109add048e38ad0a0b3568fbc64"
});

// Endpoint utilizado para operações relacionadas aos livros
const BOOKS_ENDPOINT = "/livros";

// Busca todos os livros cadastrados
export async function getBooks(): Promise<Book[]> {
    const response = await api.get<Book[]>(BOOKS_ENDPOINT);

    return response.data;
}

// Cria um novo livro na API
export async function createBook(book: CreateBook): Promise<Book> {
    const response = await api.post<Book>(BOOKS_ENDPOINT, book);

    return response.data;
}

// Remove um livro pelo seu identificador
export async function deleteBook(id: string): Promise<void> {
    await api.delete(`${BOOKS_ENDPOINT}/${id}`);
}

// Atualiza informações de um livro existente
export async function updateBook(
    id: string,
    book: UpdateBook
): Promise<void> {

    await api.put(
        `${BOOKS_ENDPOINT}/${id.trim()}`,
        book
    );
}