import styles from "./Welcome.module.css";

function Welcome({ logedUser, setAccess, setLogedUser }) {
  function hadleLogout(event) {
    event.preventDefault();
    setAccess(false);
    setLogedUser("");
  }

  return (
    <div>
      <h3>Welcome {logedUser}</h3>
      <button onClick={hadleLogout}>Log out</button>
    </div>
  );
}

export default Welcome;
