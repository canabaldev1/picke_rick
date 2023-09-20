import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className={styles.container}>
      <Random randomSearch={props.randomSearch} />
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Nav;
