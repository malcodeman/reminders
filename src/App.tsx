import React, { useState } from "react";

import style from "./app.module.css";

function App() {
  const [todos, setTodos] = useState([
    { id: generateId(), value: "Made by malcodeman", isCompleted: false },
    { id: generateId(), value: "Check it out in GitHub", isCompleted: false }
  ]);
  const [value, setValue] = useState("");

  function handleOnChange(e: any) {
    setValue(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (value === "") {
      return;
    }
    const newTodos = [
      ...todos,
      { id: generateId(), value, isCompleted: false }
    ];
    setTodos(newTodos);
    setValue("");
  }

  function generateId(): number {
    return Math.random();
  }

  return (
    <div className={style.app}>
      <main className={style.main}>
        <form onSubmit={handleSubmit}>
          <input
            className={style.input}
            type="text"
            placeholder="Add item..."
            value={value}
            onChange={handleOnChange}
          />
        </form>
        <ul className={style.list}>
          {todos.map(todo => {
            return (
              <li className={style.listItem} key={todo.id}>
                {todo.value}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
