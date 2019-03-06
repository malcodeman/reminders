import React, { useState } from "react";

import style from "./form.module.css";
import { ReactComponent as PlusSquareIcon } from "./icons/plus-square.svg";

interface Props {
  addTodo: Function;
}

const Form = (props: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value) {
      props.addTodo(value);
      setValue("");
    }
  };

  function handleOnChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="✍️ Add item..."
        value={value}
        onChange={handleOnChange}
      />
      <button className={style.plusSquareBtn} onClick={handleSubmit}>
        <PlusSquareIcon className={style.plusSquareIcon} />
      </button>
    </form>
  );
};

export default Form;
