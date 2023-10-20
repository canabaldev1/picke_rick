import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
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

  const episodeNumber = character.episode
    ? character.episode[0].split("/").pop()
    : "";

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1>Name: {character.name ? character.name : "Loading"}</h1>
        <h3>Status: {character.status ? character.status : "Loading"}</h3>
        <h3>Specie: {character.species ? character.species : "Loading"}</h3>
        <h3>Gender: {character.gender ? character.gender : "Loading"}</h3>
        <h3>Origin: {character.origin ? character.origin : "Loading"}</h3>
        {character.type && (
          <h3>Type: {character.type ? character.type : "Loading"}</h3>
        )}
        <h3>
          Debut episode:{" "}
          {character.episode
            ? character.episode[0].split("/").pop()
            : "Loading"}
        </h3>
      </div>
      <div className={styles.imageContainer}>
        {character.image ? (
          <img src={character.image} alt={character.name} />
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}

export default Detail;
