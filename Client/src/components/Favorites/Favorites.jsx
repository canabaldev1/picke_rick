import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import {
  filterCards,
  initialFavorites,
  cleanFavorites,
} from "../../redux/actions";
import { useEffect, useRef } from "react";

function Favorites(props) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const allCharacters = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();
  const filterGender = useRef(null);
  const filterStatus = useRef(null);
  const filterOrder = useRef(null);

  const handleFilter = () => {
    dispatch(
      filterCards(
        filterGender.current.value,
        filterOrder.current.value,
        filterStatus.current.value
      )
    );
  };

  useEffect(() => {
    dispatch(
      filterCards(
        filterGender.current.value,
        filterOrder.current.value,
        filterStatus.current.value
      )
    );
  }, [allCharacters, dispatch]);

  useEffect(() => {
    dispatch(initialFavorites());
    return () => {
      dispatch(cleanFavorites());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <label className={styles.label} htmlFor="selectOrder">
            Order
          </label>
          <select
            id="selectOrder"
            name="selectOrder"
            onChange={handleFilter}
            ref={filterOrder}
          >
            <option value="---">---</option>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
        </div>
        <div>
          <label className={styles.label} htmlFor="selectGender">
            Filter by gender
          </label>
          <select
            id="selectGender"
            name="selectGender"
            onChange={handleFilter}
            ref={filterGender}
          >
            <option value="---">---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label className={styles.label} htmlFor="selectStatus">
            Filter by status
          </label>
          <select
            id="selectStatus"
            name="selectStatus"
            onChange={handleFilter}
            ref={filterStatus}
          >
            <option value="---">---</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {myFavorites.map((character) => {
          return (
            <Card
              key={character.id.toString()}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              originName={character.originName}
              image={character.image}
              onClose={() => {}}
              handleFilter={handleFilter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
