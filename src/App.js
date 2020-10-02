import React from 'react';
import logo from './logo.svg';
import ToDoList from "./components/ToDoList.js";
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
