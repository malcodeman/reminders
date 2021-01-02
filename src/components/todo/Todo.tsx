import React from "react";

import style from "./todo.module.css";
import { ReactComponent as SquareIcon } from "./icons/square.svg";
import { ReactComponent as CheckSquareIcon } from "./icons/check-square.svg";
import { ReactComponent as XSquareIcon } from "./icons/x-square.svg";

interface TodoInterface {
  id: number;
  value: string;
  isCompleted: boolean;
}

interface Props {
  toggleIsCompleted: Function;
  removeTodo: Function;
  todo: TodoInterface;
}

const Todo = (props: Props) => {
  const { todo } = props;

  return (
    <li
      className={todo.isCompleted ? style.listItemCompleted : style.listItem}
      key={todo.id}
    >
      {props.todo.isCompleted ? (
        <button
          className={style.checkSquareBtn}
          onClick={() => props.toggleIsCompleted(todo.id)}
        >
          <CheckSquareIcon className={style.checkSquareIcon} />
        </button>
      ) : (
        <button
          className={style.squareBtn}
          onClick={() => props.toggleIsCompleted(todo.id)}
        >
          <SquareIcon className={style.squareIcon} />
        </button>
      )}
      <span>{todo.value}</span>
      <button
        className={
          todo.isCompleted ? style.xSquareBtnCompleted : style.xSquareBtn
        }
        onClick={() => props.removeTodo(todo.id)}
      >
        <XSquareIcon
          className={
            todo.isCompleted ? style.xSquareIconCompleted : style.xSquareIcon
          }
        />
      </button>
    </li>
  );
};

export default Todo;
