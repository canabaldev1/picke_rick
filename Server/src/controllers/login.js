const { User } = require("../DB_connection");

async function login(req, res) {
  const { email, password } = req.query;

  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ error: "It looks like some data is missing" });

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "email or password incorrect" });
    }

    if (user.password !== password) {
      return res.status(403).json({ error: "email or password incorrect" });
    }

    return res.status(200).json({ access: true, userId: user.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = login;

//
//
// //! asi se hacia antes de validar la informacion con la base de datos

// const registeredUsers = require("../utils/users");

// function login(req, res) {
//   const { email, password } = req.query;
//   let user = registeredUsers.find(
//     (user) => user.email === email && user.password === password
//   );
//   if (user) {
//     res.json({ access: true });
//   } else {
//     res.json({ access: false });
//   }
// }

// module.exports = login;
