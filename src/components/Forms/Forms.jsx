import style from "./Forms.module.css";
import { useState } from "react";
import validate from "./validations";

function Form({ login, setLogedUser }) {
  const [user, setUser] = useState({
    mail: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    mail: "",
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
    const logedUser = user.mail.slice(0, user.mail.indexOf("@"));
    setLogedUser(logedUser);
  }

  return (
    <form className={style.container}>
      <label htmlFor="mail">e-mail</label>
      <input
        id="mail"
        type="text"
        value={user.mail}
        onChange={handleChange}
        name="mail"
      />
      {error.mail && <span>{error.mail}</span>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={user.password}
        onChange={handleChange}
        name="password"
      />
      {error.password && <span>{error.password}</span>}
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
