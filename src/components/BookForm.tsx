import { useState } from "react";
import type { Book } from "../types/Book";

type BookFormProps = {
    onAddBook: (book: Book) => void;
};

function BookForm({onAddBook}: BookFormProps) {
    const[title, setTitle] = useState("")
    const[author, setAuthor] = useState("")
    const[status, setStatus] = useState<Book["status"] | "">("");

    // Envia os dados preenchidos pelo usuário para criação do livro
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
       
        if (!title.trim() || !author.trim() || !status) {
            return;
        }

        const newBook: Book = {
            title,
            author,
            status,
        }

        onAddBook(newBook);

        setTitle("");
        setAuthor("");
        setStatus("");
    }

    return( 
        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Título</label>
            <input
                type="text"
                id="title"
                value={title}
                placeholder="Digite o título do livro"
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="author">Autor</label>
            <input
                type="text"
                id="author"
                value={author}
                placeholder="Nome do autor"
                onChange={(e) => setAuthor(e.target.value)}
            />

            <label htmlFor="status">Status</label>
            <select 
                value={status}
                id="status"
                onChange={(e) => setStatus(e.target.value as Book["status"] | "")}
            >
                <option value="">Selecione</option>
                <option value="Lido">Lido</option>
                <option value="Não lido">Não lido</option>
                
            </select>

            <button type="submit">Adicionar Livro</button>


        </form>
    
    );
}

export default BookForm