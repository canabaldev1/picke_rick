import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className={styles.container}>
      <Random randomSearch={props.randomSearch} />
      <SearchBar onSearch={props.onSearch} clear={props.clear} />
      <button onClick={props.clear}>Clear</button>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Nav;
