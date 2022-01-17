import React from 'react';
import List from '../components/List';
import Form from '../components/Form';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
