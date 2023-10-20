import styles from "./Welcome.module.css";

function Welcome({ logedUser, setAccess, setLogedUser }) {
  function hadleLogout(event) {
    event.preventDefault();
    setAccess(false);
    setLogedUser("");
    localStorage.setItem("user", "");
  }

  return (
    <div className={styles.container}>
      <h3>Welcome {localStorage.getItem("user")}</h3>
      <button className={styles.logoutButton} onClick={hadleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Welcome;
