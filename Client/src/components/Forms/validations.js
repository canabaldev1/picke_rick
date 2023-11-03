function validate(user, setUser, error, setError, property) {
  // validacion mail

  if (property === "mail") {
    const mailTemplate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!user.mail) setError({ ...error, mail: "Ingresa un correo" });
    else if (user.mail.length > 35) {
      setError({ ...error, mail: "Correo electronico muy largo" });
    } else if (!mailTemplate.test(user.mail)) {
      setError({ ...error, mail: "Correo electronico no valido" });
    } else setError({ ...error, mail: "" });
  }

  // validacion password
  if (property === "password") {
    const passwordTemplate = /^(?=.*\d).{6,10}$/;
    if (!user.password) setError({ ...error, password: "Ingresa un password" });
    else if (user.password.length < 6) {
      setError({
        ...error,
        password: "Password muy corto. Debe tener al menos 6 caracteres",
      });
    } else if (user.password.length > 10) {
      setError({
        ...error,
        password: "Password muy largo. Debe tener maximo 10 caracteres",
      });
    } else if (!passwordTemplate.test(user.password)) {
      setError({
        ...error,
        password: "El password debe tener al menos un numero",
      });
    } else setError({ ...error, password: "" });
  }
}

export default validate;
