import React from "react";
import styles from "../../styles/style.module.css";

function Button(props) {
  return (
    <span>
      <button
        disabled={props.disabled}
        className={styles.button}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </span>
  );
}

export default Button;
