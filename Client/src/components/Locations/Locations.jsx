import { useParams, Link, Navigate } from "react-router-dom";
import styles from "./Locations.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

function Locations() {
  const { id, page } = useParams();

  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchCharacters() {
      setLoader(true);
      try {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/location/${id}/${page}`
        );
        setCharacters(data.characters);
        setTotalPages(data.totalPages);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacters();
    return () => setCharacters([]);
  }, [id, page]);

  const arrayButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.tittle}>
        {loader ? (
          "LOADING..."
        ) : page <= totalPages ? (
          characters.length ? (
            "LOCATION: " + characters[0].locationName
          ) : (
            "LOCATION NOT FOUND"
          )
        ) : (
          <Navigate to={`/locations/${id}/1`} replace />
        )}
      </h2>
      <div className={styles.buttonContainer}>
        {page <= totalPages &&
          totalPages > 1 &&
          arrayButtons.map((pageNumber) => {
            return (
              <Link
                className={styles.button}
                key={pageNumber}
                to={`/locations/${id}/${pageNumber}`}
              >
                <button
                  className={styles.button}
                  onClick={(e) => e.preventDefault}
                >
                  {pageNumber}
                </button>
              </Link>
            );
          })}
      </div>

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

export default Locations;
