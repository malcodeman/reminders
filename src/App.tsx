import React, { useState } from "react";

import style from "./app.module.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";
import Footer from "./components/footer/Footer";

function App() {
  const [todos, setTodos] = useState([
    { id: generateId(), value: "Made by malcodeman", isCompleted: false },
    { id: generateId(), value: "Check it out in GitHub", isCompleted: false }
  ]);

  function generateId(): number {
    return Math.random();
  }

  function toggleIsCompleted(id: number): any {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted
          ? (todo.isCompleted = false)
          : (todo.isCompleted = true);
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo = (value: string) => {
    const newTodos = [
      ...todos,
      { id: generateId(), value, isCompleted: false }
    ];
    setTodos(newTodos);
  };

  function removeTodo(id: number): any {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  }

  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Form addTodo={addTodo} />
        <ul className={style.list}>
          {todos.map(todo => {
            return (
              <Todo
                todo={todo}
                toggleIsCompleted={toggleIsCompleted}
                removeTodo={removeTodo}
              />
            );
          })}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
