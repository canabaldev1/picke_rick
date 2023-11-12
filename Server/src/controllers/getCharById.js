const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

// const URL = process.env.URL

// USANDO ASYNC AWAYT

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}${id}`);
    const { data } = response;
    if (data) {
      let character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        originName: data.origin.name,
        originId: Number(data.origin.url.split("/").pop()),
        locationName: data.location.name,
        locationId: Number(data.location.url.split("/").pop()),
        image: data.image,
        status: data.status,
        episode: data.episode[0].split("/").pop(),
      };
      res.status(200).json(character);
    } else {
      throw new Error("Character doesn't exist");
    }
  } catch (reason) {
    res.status(404).send(reason.message);
  }
}

// USANDO EXPRESS

// function getCharById(req, res) {
//   const { id } = req.params;
//   axios
//     .get(`${URL}${id}`)
//     .then((response) => {
//       if (response.data) {
//         let character = {
//           id: response.data.id,
//           name: response.data.name,
//           gender: response.data.gender,
//           species: response.data.species,
//           origin: response.data.origin.name,
//           image: response.data.image,
//           status: response.data.status,
//           episode: response.data.episode[0].split("/").pop(),
//         };
//         res.status(200).json(character);
//       } else {
//         res.status(404).json(character);
//       }
//     })
//     .catch((reason) => {
//       if (reason.response.status === 404) {
//         res.status(404).send("character doesn't exist");
//       } else {
//         res.status(500).send(reason.message);
//       }
//     });
// }

// USANDO LOS METODOS DE HTML

// function getCharById(res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       return {
//         id,
//         name: response.data.name,
//         gender: response.data.gender,
//         species: response.data.species,
//         origin: response.data.origin.name,
//         image: response.data.image,
//         status: response.data.status,
//         episode: response.data.episode[0].split("/").pop(),
//       };
//     })
//     .then((response) => {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(response));
//     })
//     .catch((reason) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(reason.message);
//     });
// }

module.exports = getCharById;
