const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/location/";
const charsToShow = 20;

async function getCharByLocation(req, res) {
  try {
    const { id, page } = req.params;
    const { data } = await axios.get(`${URL}${id}`);
    const { residents } = data;
    const totalPages = Math.ceil(residents.length / charsToShow);

    const residentsToShow = residents.slice(
      Number(page) * charsToShow - charsToShow,
      Number(page) * charsToShow
    );

    const residentsPromises = residentsToShow.map((url) => axios.get(url));

    Promise.all(residentsPromises)
      .then((response) => response.map((resp) => resp.data))
      .then((data) =>
        data.map((char) => {
          return {
            id: char.id,
            name: char.name,
            gender: char.gender,
            species: char.species,
            originName: char.origin.name,
            originId: Number(char.origin.url.split("/").pop()),
            locationName: char.location.name,
            locationId: Number(char.location.url.split("/").pop()),
            image: char.image,
            status: char.status,
            episode: char.episode[0].split("/").pop(),
          };
        })
      )
      .then((characters) => res.status(200).json({ characters, totalPages }));
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

module.exports = getCharByLocation;
