import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">TODO</h1>
      </header>
      <CreateTodo setTodos={setTodos} todos={todos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
