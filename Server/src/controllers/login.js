const registeredUsers = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  let user = registeredUsers.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.json({ access: true });
  } else {
    res.json({ access: false });
  }
}

module.exports = login;
