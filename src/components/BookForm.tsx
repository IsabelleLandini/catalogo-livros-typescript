import { useState } from "react";

type BookFormProps = {
    onAddBook: (book: {
        title: string;
        author: string;
        status: string;
    }) => void;
};

function BookForm({onAddBook}: BookFormProps) {
    const[title, setTitle] = useState("")
    const[author, setAuthor] = useState("")
    const[status, setStatus] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const newBook = {
            title,
            author,
            status
        }
        onAddBook(newBook)

        setTitle("")
        setAuthor("")
        setStatus("")
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
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">Selecione</option>
                <option value="read">Lido</option>
                <option value="unread">Não lido</option>
                
            </select>

            <button>Adicionar Livro</button>


        </form>
    
    );
}

export default BookForm