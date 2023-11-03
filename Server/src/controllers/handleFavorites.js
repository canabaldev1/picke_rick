let myFavorites = [];

function postFav(req, res) {
  let character = req.body;
  myFavorites.push(character);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((char) => char.id !== Number(id));
  res.status(200).json(myFavorites);
}

function deleteAllFav(req, res) {
  myFavorites = [];
  console.log(myFavorites);
  console.log("ESTA ENTRANDO EN EL DELETEALLFAVORITES");
  res.status(200).json(myFavorites);
}

function getFav(req, res) {
  res.status(200).json(myFavorites);
}

module.exports = { getFav, postFav, deleteFav, deleteAllFav };
