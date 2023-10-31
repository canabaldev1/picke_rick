import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getEpisodeInfo from "./getEpisodeInfo";

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

  const episodeInfo = getEpisodeInfo(Number(character.episode));

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1>Name: {character.name ? character.name : "Loading"}</h1>
        <h3 className={styles.specs}>
          ID: {character.id ? character.id : "Loading"}
        </h3>
        <h3 className={styles.specs}>
          Status: {character.status ? character.status : "Loading"}
        </h3>
        <h3 className={styles.specs}>
          Specie: {character.species ? character.species : "Loading"}
        </h3>
        <h3 className={styles.specs}>
          Gender: {character.gender ? character.gender : "Loading"}
        </h3>
        <h3 className={styles.specs}>
          Origin: {character.origin ? character.origin : "Loading"}
        </h3>
        {character.type && (
          <h3 className={styles.specs}>
            Type: {character.type ? character.type : "Loading"}
          </h3>
        )}
        <h3 className={styles.specs}>
          Debut episode:{" "}
          {character.episode
            ? `season ${episodeInfo.season} episode ${episodeInfo.episode}`
            : "Loading"}
        </h3>
        {character.id && (
          <h4 className={styles.specs}>
            <a className={styles.links} target="blank" href={episodeInfo.link}>
              let´s see what Rotten Tomatoes says about this episode
            </a>
          </h4>
        )}
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
