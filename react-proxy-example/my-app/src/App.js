import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import { getAllTodos } from './services/TodoService';
import Footer from './components/Footer';

function App() {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const [todos, setTodos] = useState([]);


  const handleSubmit = () => {
    createBook(bookShelf)
      .then(() => {
        setNumberBooks(numberOfBooks + 1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === 'book') {
      bookShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      bookShelf.category = e.target.value;
    } else if (e.target.name === 'author') {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        console.log(todos);
      });
  }


  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard
          numberOfBooks={numberOfBooks}
          getAllBook={getAllBook}
        />
        <BookTable books={books} />

        <button onClick={() => getAllTodo()}>Get all todos</button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
