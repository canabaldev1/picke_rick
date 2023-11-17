const { User } = require("../DB_connection");

async function postUser(req, res) {
  const { email, password } = req.body;
  if ((!email, !password))
    res.status(400).json({ error: "Some data is missing" });
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });
    if (created) {
      res.status(200).send("Registered succesfully");
    } else {
      res.status(200).send("User already registered");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = postUser;
