import React, { useState } from "react";
import styles from "../../styles/style.module.css";

function Button(props) {
  return (
    <span>
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    </span>
  );
}

export default Button;
