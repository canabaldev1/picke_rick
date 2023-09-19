import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={styles.container}>
      <Random randomSearch={props.randomSearch} />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
