import style from "./Forms.module.css";
import { useState } from "react";
import validate from "./validations";

function Form({ login, setLogedUser, wrongPassword, register }) {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handleChange(event) {
    const property = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [property]: value });
    validate(
      { ...user, [property]: value },
      setUser,
      error,
      setError,
      property
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(user);
    const logedUser = user.email.slice(0, user.email.indexOf("@"));
    setLogedUser(logedUser);
    localStorage.setItem("user", logedUser);
  }

  function handleRegister(event) {
    event.preventDefault();
    register(user);
  }

  return (
    <form className={style.container}>
      <div className={style.inputArea}>
        <label className={style.tittle} htmlFor="email">
          email
        </label>
        <input
          className={style.input}
          id="email"
          type="text"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        {error.email && <span className={style.error}>{error.email}</span>}
      </div>

      <div className={style.inputArea}>
        <label className={style.tittle} htmlFor="password">
          Password
        </label>
        <input
          className={style.input}
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
        />
        {error.password && (
          <span className={style.error}>{error.password} </span>
        )}
      </div>

      <div className={style.buttonContainer}>
        <button className={style.button} type="submit" onClick={handleSubmit}>
          Loggin
        </button>
        <button className={style.button} type="submit" onClick={handleRegister}>
          Register
        </button>
        <p>{wrongPassword}</p>
      </div>
    </form>
  );
}

export default Form;
