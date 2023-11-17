function validate(user, setUser, error, setError, property) {
  // validacion mail

  if (property === "email") {
    const mailTemplate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!user.email) setError({ ...error, email: "Set an email" });
    else if (user.email.length > 35) {
      setError({ ...error, email: "email is too long" });
    } else if (!mailTemplate.test(user.email)) {
      setError({ ...error, email: "email not valid" });
    } else setError({ ...error, email: "" });
  }

  // validacion password
  if (property === "password") {
    const passwordTemplate = /^(?=.*\d).{6,10}$/;
    if (!user.password) setError({ ...error, password: "Set a password" });
    else if (user.password.length < 6) {
      setError({
        ...error,
        password: "Password iss too short",
      });
    } else if (user.password.length > 10) {
      setError({
        ...error,
        password: "Now is too long",
      });
    } else if (!passwordTemplate.test(user.password)) {
      setError({
        ...error,
        password: "It needs a Number Morty, a Number!",
      });
    } else setError({ ...error, password: "" });
  }
}

export default validate;
