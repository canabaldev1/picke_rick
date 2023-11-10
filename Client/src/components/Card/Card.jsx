import React, { useRef } from "react";
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

  const characterImage = useRef(null);

  const divContainerRef = useRef(null);

  const handleFavorites = () => {
    if (isFav) {
      if (location.pathname === "/favorites") {
        divContainerRef.current.className =
          divContainerRef.current.className + " " + styles.divContainerOnClose;
        setTimeout(() => {
          setIsFav(false);
          dispatch(removeFav(props.id));
        }, 500);
      } else {
        setIsFav(false);
        dispatch(removeFav(props.id));
      }

      // props.handleFilter && props.handleFilter();
    } else {
      setIsFav(true);
      dispatch(addFav(props));
      // props.handleFilter && props.handleFilter();
    }
  };

  const handleLoad = () => {
    characterImage.current.className = styles.characterImageLoaded;
  };

  const handleClose = () => {
    divContainerRef.current.className =
      divContainerRef.current.className + " " + styles.divContainerOnClose;
    setTimeout(() => {
      props.onClose(props.id);
    }, 500);
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [allCharacters, props.id]);

  return (
    <div className={styles.divContainer} ref={divContainerRef}>
      <div className={styles.divHeader}>
        <img
          loading="lazy"
          src={props.image}
          alt={props.name}
          onLoad={handleLoad}
          ref={characterImage}
          className={styles.characterImageNotLoaded}
        />

        {isFav && props.id && (
          <button className={styles.favYesButton} onClick={handleFavorites}>
            <img className={styles.favYesImg} src={favoriteYes} alt="FY" />
          </button>
        )}
        {!isFav && props.id && (
          <button className={styles.favNoButton} onClick={handleFavorites}>
            <img className={styles.favNoImg} src={favoriteNo} alt="FN" />
          </button>
        )}

        {location.pathname === "/home" && props.id && (
          <button className={styles.closeButton} onClick={handleClose}>
            <img src={close} alt="close" />
          </button>
        )}

        {props.id && (
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
        )}
      </div>
      {props.id && (
        <Link className={styles.divFooter} to={`/detail/${props.id}`}>
          <div className={styles.h2Container}>
            <h2 className={styles.h2Name}>
              {props.id}. {props.name}
            </h2>
          </div>{" "}
        </Link>
      )}
    </div>
  );
}
