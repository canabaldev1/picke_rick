import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const location = useLocation();
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

      {location.pathname !== "/about" && (
        <Random randomSearch={props.randomSearch} />
      )}
      {location.pathname !== "/about" && (
        <SearchBar onSearch={props.onSearch} clear={props.clear} />
      )}
      {location.pathname !== "/about" && (
        <button className={styles.clearButton} onClick={props.clear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Nav;
