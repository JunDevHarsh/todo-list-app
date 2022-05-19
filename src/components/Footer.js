import React from "react";

function Footer({ todos, setTodos }) {
  const clearCompleted = () => {
    const tempTodos = todos.filter((todo) => todo.complete !== true);
    setTodos(tempTodos);
  };

  return (
    <div className="footer">
      <span className="todos__length">
        {todos.filter((todo) => todo.complete !== true).length} task left
      </span>
      <button className="clear__btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default Footer;
