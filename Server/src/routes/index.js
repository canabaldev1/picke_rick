const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {
  getFav,
  postFav,
  deleteFav,
  deleteAllFav,
} = require("../controllers/handleFavorites");

const { Router } = require("express");

const routes = Router();

routes.get("/character/:id", getCharById);
routes.get("/login", login);
routes.post("/fav", postFav);
routes.get("/fav", getFav);
routes.delete("/fav/all", deleteAllFav);
routes.delete("/fav/:id", deleteFav);

module.exports = routes;
