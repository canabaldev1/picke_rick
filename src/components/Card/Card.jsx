import React from "react";
import styles from "./Card.module.css";
import statusImg from "./status.png";
import speciesImg from "./species.png";
import genderImg from "./gender.png";
import originImg from "./origin.png";
import close from "./close.png";
import favoriteYes from "./favoriteYes.png";
import favoriteNo from "./favoriteNo.png";

import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Card(props) {
  const location = useLocation();

  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const allCharacters = useSelector((state) => state.allCharacters);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
      // props.handleFilter && props.handleFilter();
    } else {
      setIsFav(true);
      dispatch(addFav(props));
      // props.handleFilter && props.handleFilter();
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [allCharacters, props.id]);

  return (
    <div className={styles.divContainer}>
      <div className={styles.divHeader}>
        <img loading="lazy" src={props.image} alt={props.name} />

        {isFav ? (
          <button className={styles.favYesButton} onClick={handleFavorites}>
            <img className={styles.favYesImg} src={favoriteYes} alt="FY" />
          </button>
        ) : (
          <button className={styles.favNoButton} onClick={handleFavorites}>
            <img className={styles.favNoImg} src={favoriteNo} alt="FN" />
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
            <h2 className={styles.h2Origin}>{props.origin}</h2>
          </div>
        </div>
      </div>
      <Link className={styles.divFooter} to={`/detail/${props.id}`}>
        <div>
          <h2 className={styles.h2Name}>
            {props.id}. {props.name}
          </h2>
        </div>{" "}
      </Link>
    </div>
  );
}
