import React, { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose, setCharacters, access }) {
  // useEffect(() => {
  //   setCharacters([]);
  //   return;
  // }, [access]);

  return (
    <div className={styles.container}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
