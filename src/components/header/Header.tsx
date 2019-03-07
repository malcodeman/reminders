import React from "react";

import style from "./header.module.css";
import { ReactComponent as Sputnik } from "./icons/sputnik.svg";

const Header = () => {
  function getDay(): string {
    return new Date().toLocaleDateString("en-us", { weekday: "long" });
  }

  return (
    <header className={style.header}>
      <Sputnik className={style.logo} />
      Have a nice {getDay()}
    </header>
  );
};

export default Header;
