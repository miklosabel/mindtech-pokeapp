import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Appbar from "./components/appbar/Appbar";
import PokemonList from "./components/pokemon-list/PokemonList";
import { PokemonTypeNames } from "./constants/constants";
import Header from "./shared/header/Header";

function App(): JSX.Element {
  return (
    <div className="App">
      <Appbar />
      <div className="content">
        <Routes>
          <Route
            key="landing"
            path="/"
            element={<Header>Welcome to my pokeapp!</Header>}
          />
          {PokemonTypeNames.map((pokemonType) => (
            <Route
              key={pokemonType}
              path={"/" + pokemonType}
              element={<PokemonList pokemonType={pokemonType} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
