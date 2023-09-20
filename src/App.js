import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error404/Error";

function App() {
  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    const condition = characters.some((character) => {
      return character.id === Number(id);
    });

    if (condition) {
      return window.alert("The character is already added");
    }

    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const { data } = response;

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("There is no character with this ID!");
      }
    } catch (error) {
      window.alert("There is no character with this ID!");
    }
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

  return (
    <div className="App">
      <Nav onSearch={onSearch} randomSearch={randomSearch} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
