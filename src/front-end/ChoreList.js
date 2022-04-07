import React, { useState } from "react";
import './ChoreList.css';
//importing components
import Form from "./components/Form";
import ChoreList from "./components/ChoreList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>chore list </h1>
      </header>
      <Form inputText={inputText}
      todos={todos} 
      setTodos={setTodos}
       setInputText = {setInputText}
      />
      <ChoreList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
