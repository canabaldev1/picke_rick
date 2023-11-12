const getCharById = require("../controllers/getCharById");
const getCharByLocation = require("../controllers/getCharByLocation");
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
routes.get("/location/:id/:page", getCharByLocation);
routes.get("/login", login);
routes.post("/fav", postFav);
routes.get("/fav", getFav);
routes.delete("/fav/all", deleteAllFav);
routes.delete("/fav/:id", deleteFav);

module.exports = routes;
