import React from "react";

import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      Made by{" "}
      <a
        className={style.link}
        href="https://github.com/malcodeman"
        target="_blank"
        rel="noopener noreferrer"
      >
        malcodeman{" "}
        <span role="img" aria-label="astronaut">
          👩‍🚀
        </span>
      </a>{" "}
      -{" "}
      <a
        className={style.link}
        href="https://github.com/malcodeman/reminders"
        target="_blank"
        rel="noopener noreferrer"
      >
        repo
      </a>
    </footer>
  );
};

export default Footer;
