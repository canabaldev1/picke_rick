import { useParams } from "react-router-dom";
import styles from "./Origin.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

function Origin() {
  const { id } = useParams();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/origin/${id}`
        );
        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacters();
    return () => setCharacters([]);
  }, [id]);

  return (
    <div className={styles.container}>
      <h2 className={styles.tittle}>
        {characters.length
          ? "ORIGIN: " + characters[0].locationName
          : "LOCATION NOT FOUND"}
      </h2>
      <div className={styles.cardsContainer}>
        {characters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              originName={character.originName}
              image={character.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Origin;
