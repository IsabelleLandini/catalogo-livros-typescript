export type BookStatus = "Lido" | "Não lido";

export type Book = {
    _id?: string;
    title: string;
    author: string;
    status: BookStatus;
}

export type CreateBook = Omit<Book, "_id">;

export type UpdateBook = Omit<Book, "_id">;

