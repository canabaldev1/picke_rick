import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  console.log(id);
  const [character, setCharacter] = useState({});
  console.log(setCharacter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const { data } = response;

        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        window.alert("Error al obtener datos del personaje:", error);
      }
    };

    fetchData();

    return () => {
      setCharacter({});
    };
  }, [id]);

  return (
    <div className={styles.container}>
      <h1>{character.name ? character.name : "Loading"}</h1>
      <h3>{character.status ? character.status : "Loading"}</h3>
      <h3>{character.species ? character.species : "Loading"}</h3>
      <h3>{character.gender ? character.gender : "Loading"}</h3>
      <h3>
        {character.origin && character.origin.name
          ? character.origin.name
          : "Loading"}
      </h3>
      <div>{character.image ? <img src={character.image} /> : "Loading"}</div>
    </div>
  );
}

export default Detail;
