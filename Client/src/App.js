import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error404/Error";
import Form from "./components/Forms/Forms";
import Welcome from "./components/Welcome/Welcome";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [disableButtons, setDisableButtons] = useState(false);

  async function onSearch(id) {
    const condition = characters.some((character) => {
      return character.id === Number(id);
    });

    if (condition) {
      return window.alert("The character is already added");
    }

    setDisableButtons(true);

    const emptyCharacter = {
      id: "",
      name: "",
      gender: "",
      species: "",
      origin: "",
      image: "",
      status: "",
      episode: "",
    };
    setCharacters([...characters, emptyCharacter]);

    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const { data } = response;
      if (data.name) {
        setCharacters([...characters, data]);
        setDisableButtons(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        window.alert(
          "Oh geez, Rick! There's, like, a major issue here. It turns out there's, uh, no character with that ID, and it's causing a real, you know, problem in the multiverse or something. This is, like, seriously messed up!"
        );
      } else {
        window.alert(
          "Oh, wow, Rick! This error, it's, like, absolutely colossal, you know? It's, like, wreaking havoc across the entire multiverse, and it's really, really, uh, concerning, you know, like, seriously concerning."
        );
      }

      console.log(error.message);
      setCharacters(characters);
      setDisableButtons(false);
    }
  }

  function clear() {
    setCharacters([]);
  }

  function randomSearch() {
    const id = Math.ceil(Math.random() * 826);
    onSearch(id);
  }

  function onClose(id) {
    const filtered = characters.filter(
      (character) => Number(character.id) !== id
    );
    setCharacters(filtered);
  }

  const location = useLocation();

  const [access, setAccess] = useState(
    JSON.parse(localStorage.getItem("access"))
  );

  const [logedUser, setLogedUser] = useState("");

  // const MAIL_EX = "carlos@ejemplo.com";
  // const PASSWORD_EX = "123456";
  const navigate = useNavigate();

  // function login(user) {
  //   if (user.mail === MAIL_EX && user.password === PASSWORD_EX) {
  //     setAccess(true);
  //     navigate("/home");
  //   } else {
  //     window.alert("usuario o contraseña incorrecta");
  //   }
  // }

  function login(userData) {
    const { mail, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${mail}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    if (access && location.pathname === "/") {
      navigate("/home");
    }
    if (!access) navigate("/");
    localStorage.setItem("access", access);
  }, [access, location.pathname, navigate]);

  return (
    <div className="App">
      {location.pathname !== "/" && access ? (
        <Welcome
          logedUser={logedUser}
          setAccess={setAccess}
          setLogedUser={setLogedUser}
        />
      ) : (
        ""
      )}
      {location.pathname !== "/" ? (
        <Nav
          disableButtons={disableButtons}
          onSearch={onSearch}
          randomSearch={randomSearch}
          clear={clear}
        />
      ) : (
        ""
      )}

      <Routes>
        <Route
          path="/"
          element={
            access ? (
              <Navigate to="/home" replace />
            ) : (
              <Form login={login} setLogedUser={setLogedUser} />
            )
          }
        />
        <Route
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              setCharacters={setCharacters}
              access={access}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
