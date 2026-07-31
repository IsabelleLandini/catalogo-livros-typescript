# 📚 Catálogo de Livros - React + TypeScript

Aplicação frontend desenvolvida com **React e TypeScript** para gerenciamento de um catálogo de livros.

O projeto permite cadastrar, visualizar, atualizar o status e remover livros, aplicando conceitos fundamentais do desenvolvimento frontend moderno, como componentização, tipagem com TypeScript, gerenciamento de estado e organização de componentes.

---

## 🚀 Tecnologias utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)

---

## 📌 Funcionalidades

- ✅ Cadastro de novos livros
- ✅ Listagem dos livros cadastrados
- ✅ Atualização do status dos livros
- ✅ Exclusão de livros
- ✅ Organização dos dados utilizando TypeScript
- ✅ Componentização da aplicação
- ✅ Interface responsiva e estilizada

---

## 📂 Estrutura do projeto

```
src
│
├── components
│   ├── BookForm.tsx
│   ├── BookItem.tsx
│   └── BookList.tsx
│
├── hooks
│   └── useBooks.ts
│
├── services
│   └── api.ts
│
├── types
│   └── Book.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

## 🧩 Componentes

### BookForm

Responsável pelo formulário de cadastro de livros.

Permite inserir:

* título;
* autor;
* status.

Os dados são enviados para o componente principal através de props.

---

### BookList

Responsável por renderizar a lista de livros cadastrados.

Realiza a iteração dos dados utilizando o método `.map()` e renderiza cada livro através do componente `BookItem`.

---

### BookItem

Componente responsável pela apresentação individual de cada livro.

Exibe:

* título;
* autor;
* status atual do livro.

Também permite:

* atualizar o status do livro;
* remover um livro cadastrado.

---

## 🔄 Fluxo da aplicação

```
BookForm
    |
    ↓
App.tsx
    |
    ↓
useBooks Hook
    |
    ↓
BookList
    |
    ↓
BookItem
```

O gerenciamento dos livros é centralizado no hook personalizado useBooks, responsável pelas operações de:

* adicionar livros;
* atualizar status;
* remover livros.

Os dados e ações são compartilhados entre os componentes através de propriedades (`props`).

---

## 📝 Tipagem com TypeScript

Foi criado um tipo específico para representar os livros:

```ts
type Book = {
    _id: string;
    title: string;
    author: string;
    status: string;
}
```

---

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/IsabelleLandini/catalogo-livros-typescript.git
```

Entre na pasta:

```bash
cd catalogo-livros-react-ts
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173/
```

---

## 👩🏻‍💻 Desenvolvido por

**Isabelle Landini**

