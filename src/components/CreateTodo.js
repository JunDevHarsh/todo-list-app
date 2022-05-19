import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTodo({ todos, setTodos }) {
  const inputRef = useRef();

  const check = (e) => {
    e.preventDefault();
    const todo = inputRef.current.value.trim();
    if (todo === "" || todo <= 0) return;
    const randomId = uuidv4();
    setTodos((prev) => [
      ...prev,
      {
        id: randomId,
        task: todo,
        complete: false,
      },
    ]);
    inputRef.current.value = null;
  };

  return (
    <div className="create__todo">
      <form onSubmit={(e) => check(e)}>
        <input
          className="input__todo"
          ref={inputRef}
          type="text"
          placeholder="Enter a todo"
        />
      </form>
    </div>
  );
}

export default CreateTodo;
