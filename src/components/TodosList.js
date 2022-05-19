import React from "react";
import Footer from "./Footer";

function TodosList({ todos, setTodos }) {
  const toggleTask = (id) => {
    const tempTodos = JSON.parse(JSON.stringify(todos));
    const selectedTodo = tempTodos.find((todo) => id === todo.id);
    selectedTodo.complete = !selectedTodo.complete;
    setTodos(tempTodos);
  };

  return (
    <div className="todos__box">
      <ul className="todos__list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo__item">
            <input
              type="checkbox"
              checked={todo.complete}
              id={`todo${todo.id}`}
              onChange={() => toggleTask(todo.id)}
              className="checkbox"
            />
            <label htmlFor={`todo${todo.id}`}>{todo.task}</label>
          </li>
        ))}
        <Footer todos={todos} setTodos={setTodos} />
      </ul>
    </div>
  );
}

export default TodosList;
