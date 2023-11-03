import styles from "./Error.module.css";

function Error() {
  return (
    <div className={styles.container}>
      <h1>Error 404</h1>
      <h3>Couldn't reach the page</h3>
    </div>
  );
}

export default Error;
