const getCharById = require("../controllers/getCharById");
const getCharByLocation = require("../controllers/getCharByLocation");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
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

routes.post("/login", postUser);

module.exports = routes;
