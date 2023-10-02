import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

function Favorites(props) {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log(myFavorites);
  return (
    <div className={styles.container}>
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
  );
}

export default Favorites;
