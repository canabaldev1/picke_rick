import styles from "./SearchBar.module.css";
import React, { useState, useRef } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const searchInput = useRef(null);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        ref={searchInput}
        className={styles.input}
        type="search"
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            props.onSearch(id);
            setId("");
            searchInput.current.focus();
          }
        }}
        onChange={handleChange}
        value={id}
      />
      <button
        className={styles.button}
        onClick={() => {
          props.onSearch(id);
          setId("");
          searchInput.current.focus();
        }}
      >
        Add
      </button>
    </div>
  );
}
