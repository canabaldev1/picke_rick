import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
    return (
        <div className="App">
            <div className="nav">
                <SearchBar
                    onSearch={(characterID) => window.alert(characterID)}
                />{" "}
            </div>

            <Cards characters={characters} />
        </div>
    );
}

export default App;
