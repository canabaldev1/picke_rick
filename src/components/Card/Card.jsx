import React from "react";
import styles from "./Card.module.css";
import statusImg from "./status.png";
import speciesImg from "./species.png";
import genderImg from "./gender.png";
import originImg from "./origin.png";
import close from "./close.png";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Card(props) {
  const location = useLocation();
  console.log(location);

  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={styles.divContainer}>
      <div className={styles.divHeader}>
        <img src={props.image} alt={props.name} />

        {isFav ? (
          <button className={styles.favYesButton} onClick={handleFavorites}>
            FY
          </button>
        ) : (
          <button className={styles.favNoButton} onClick={handleFavorites}>
            FN
          </button>
        )}

        {location.pathname === "/home" && (
          <button
            className={styles.closeButton}
            onClick={() => props.onClose(props.id)}
          >
            <img src={close} alt="close" />
          </button>
        )}

        <div className={styles.info}>
          <img className={styles.imgStatus} src={statusImg} alt="status" />
          <div className={styles.divStatus}>
            <h2 className={styles.h2Status}>{props.status}</h2>
          </div>

          <img className={styles.imgSpecies} src={speciesImg} alt="species" />
          <div className={styles.divSpecies}>
            <h2 className={styles.h2Species}>{props.species}</h2>
          </div>

          <img className={styles.imgGender} src={genderImg} alt="gender" />
          <div className={styles.divGender}>
            <h2 className={styles.h2Gender}>{props.gender}</h2>
          </div>

          <img className={styles.imgOrigin} src={originImg} alt="origin" />
          <div className={styles.divOrigin}>
            <h2 className={styles.h2Origin}>{props.origin.name}</h2>
          </div>
        </div>
      </div>
      <div className={styles.divFooter}>
        <Link className={styles.h2Name} to={`/detail/${props.id}`}>
          <h2 className={styles.h2Name}>{props.name}</h2>
        </Link>
      </div>
    </div>
  );
}
