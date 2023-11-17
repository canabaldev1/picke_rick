require("dotenv").config();
// USANDO EXPRESS
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const { conn } = require("./DB_connection");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", routes);

const PORT = process.env.PORT; // CONFIGURAR CORRECTAMENTE EL .env - poner encima de todo

conn
  .sync({ alter: true }) // alter o force
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//
//
//
//
//
//
// USANDO LOS METODOS DE HTML

// const http = require("http");
// const PORT = 3001;
// const HOST = "localhost";
// const data = require("./utils/data.js");
// const getCharById = require("./controllers/getCharById.js");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").pop();
//       getCharById(res, id);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("URL not valid");
//     }
//   })
//   .listen(PORT, HOST);
