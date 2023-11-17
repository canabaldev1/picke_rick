const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
  console.log(req.body);
  const {
    id,
    name,
    gender,
    species,
    originName,
    locationName,
    locationId,
    image,
    status,
    episode,
  } = req.body;

  if (
    !id ||
    !name ||
    !gender ||
    !species ||
    !originName ||
    !locationName ||
    !locationId ||
    !image ||
    !status ||
    !episode
  )
    return res.status(400).json({ error: "Some data is missing" });

  try {
    const [charFav, created] = await Favorite.findOrCreate({
      where: { id },
      defaults: {
        name,
        gender,
        species,
        originName,
        locationName,
        locationId,
        image,
        status,
        episode,
      },
    });

    console.log(created);

    const myFavorites = await Favorite.findAll();

    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteFav(req, res) {
  const { id } = req.params;
  if (!id) return res.status(404).json({ error: "falta id" });

  try {
    await Favorite.destroy({
      where: { id },
    });

    const myFavorites = await Favorite.findAll();

    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//

//

//

// // antes de conectar la base de datos

// let myFavorites = [];

// function postFav(req, res) {
//   let character = req.body;
//   myFavorites.push(character);
//   res.status(200).json(myFavorites);
// }

// function deleteFav(req, res) {
//   const { id } = req.params;
//   myFavorites = myFavorites.filter((char) => char.id !== Number(id));
//   res.status(200).json(myFavorites);
// }

async function deleteAllFav(req, res) {
  try {
    await Favorite.destroy({ where: {} });

    res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// function deleteAllFav(req, res) {
//   myFavorites = [];
//   console.log(myFavorites);
//   console.log("ESTA ENTRANDO EN EL DELETEALLFAVORITES");
//   res.status(200).json(myFavorites);
// }

async function getFav(req, res) {
  try {
    const myFavorites = await Favorite.findAll();
    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// function getFav(req, res) {
//   res.status(200).json(myFavorites);
// }

module.exports = { getFav, postFav, deleteFav, deleteAllFav };
