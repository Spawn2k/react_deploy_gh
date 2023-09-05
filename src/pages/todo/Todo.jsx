import React, { Component, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import HomeBtn from '../home-page/components/HomeBtn';
import { useTitle } from '../../hooks/useTitle';

const Todo = (props) => {
  // const {} = props;
  const [notes, setNotes] = useState([]);

  const { getTitle } = useTitle('assets/icon/todo.svg');
  useEffect(() => {
    document.title = getTitle;
    return () => {
      document.title = '';
    };
  }, [getTitle]);

  const handleDelete = (id) => {
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  };

  return (
    <>
      <main className="m-todo-main">
        <Header />

        <CreateArea setNotes={setNotes} />
        <div className="sec-notes">
        {notes.map((note, idx) => (

          <Note key={idx} note={note} upHandleDelete={handleDelete} />
        ))}
        </div>
      </main>
      <Footer />
      <HomeBtn color={'#f5ba13'} />
    </>
  );
};

export default Todo;
