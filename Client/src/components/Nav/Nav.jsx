import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAllFavorites } from "../../redux/actions";

const Nav = (props) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const handleClearFavorites = () => {
    dispatch(clearAllFavorites());
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/home">
        Home
      </Link>
      <Link className={styles.link} to="/favorites">
        Favorites
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>

      {(location.pathname === "/favorites" ||
        location.pathname === "/home") && (
        <Random
          randomSearch={props.randomSearch}
          disableButtons={props.disableButtons}
        />
      )}
      {(location.pathname === "/favorites" ||
        location.pathname === "/home") && (
        <SearchBar
          onSearch={props.onSearch}
          clear={props.clear}
          disableButtons={props.disableButtons}
        />
      )}
      {!location.pathname.includes("about") &&
        !location.pathname.includes("detail") &&
        location.pathname === "/home" && (
          <button
            className={styles.clearButton}
            onClick={props.clear}
            disabled={props.disableButtons}
          >
            Clear home
          </button>
        )}
      {location.pathname !== "/about" && location.pathname === "/favorites" && (
        <button className={styles.clearButton} onClick={handleClearFavorites}>
          Clear favorites
        </button>
      )}
    </div>
  );
};

export default Nav;
