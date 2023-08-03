import React, { Component, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import HomeBtn from '../home-page/components/HomeBtn';

const Todo = (props) => {
  // const {} = props;
  const [notes, setNotes] = useState([]);

  const handleDelete = (id) => {
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  };

  return (
    <>
      <main className="m-todo-main">
        <Header />
        <CreateArea setNotes={setNotes} />
        {notes.map((note, idx) => (
          <Note key={idx} note={note} upHandleDelete={handleDelete} />
        ))}
      </main>
      <Footer />
      <HomeBtn color={'#f5ba13'} />
    </>
  );
};

export default Todo;
