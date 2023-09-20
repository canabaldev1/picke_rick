import styles from "./SearchBar.module.css";
import React, { useState, useRef } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const searchInput = useRef(null);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        ref={searchInput}
        className={styles.input}
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button
        className={styles.button}
        onClick={() => {
          props.onSearch(id);
          setId("");
          console.log(searchInput);
          searchInput.current.focus();
        }}
      >
        Add
      </button>
    </div>
  );
}
