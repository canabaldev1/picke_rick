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
  const dispatch = useDispatch();
  const filterGender = useRef(null);
  const filterOrder = useRef(null);

  const handleFilter = () => {
    dispatch(
      filterCards(filterGender.current.value, filterOrder.current.value)
    );
  };

  useEffect(() => {
    dispatch(initialFavorites());
    return () => {
      dispatch(cleanFavorites());
    };
  }, []);

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
            <option value={null}>---</option>
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
            <option value={null}>---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {myFavorites.map((character) => {
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
              onClose={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
