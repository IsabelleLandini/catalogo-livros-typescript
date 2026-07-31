export type BookStatus = "Lido" | "Não lido";

// Estrutura completa de um livro retornado pela API
export type Book = {
    _id?: string;
    title: string;
    author: string;
    status: BookStatus;
}

// Tipo utilizado para criação de novos livros,
// removendo o ID que é gerado automaticamente pela API
export type CreateBook = Omit<Book, "_id">;

// Tipo utilizado para atualização,
// pois o ID é enviado pela URL da requisição
export type UpdateBook = Omit<Book, "_id">;

