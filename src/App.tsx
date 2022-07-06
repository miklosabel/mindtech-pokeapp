import { PokeAPI } from "pokeapi-types";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Appbar from "./components/appbar/Appbar";
import PokemonList from "./components/pokemon-list/PokemonList";
import { useGetPokemonTypes } from "./shared/getPokemonTypesHook";
import Header from "./shared/header/Header";

function App(): JSX.Element {
  const pokemonTypes = useGetPokemonTypes();

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
          {pokemonTypes &&
            pokemonTypes.map(
              ({ name: pokemonType }: PokeAPI.NamedAPIResource) => (
                <Route
                  key={pokemonType}
                  path={"/" + pokemonType}
                  element={<PokemonList pokemonType={pokemonType} />}
                />
              )
            )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
