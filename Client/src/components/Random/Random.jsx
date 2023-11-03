import React from "react";
import styles from "./Random.module.css";

function Random(props) {
  const handleClick = () => {
    props.randomSearch();
  };

  return (
    <div>
      <button
        className={styles.randomButton}
        onClick={handleClick}
        disabled={props.disableButtons}
      >
        Random
      </button>
    </div>
  );
}

export default Random;
