import './components/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Selected from "./components/Selected";
import Navbar from "./components/Navbar";
import Mainbar from './components/Mainbar';
import NavButtons from './components/NavButtons';
import AboutMe from './components/AboutMe';
import Socials from './components/Socials';
import Footer from './components/Footer';
import React, { useState, useEffect } from "react";

   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="about" element={<AboutMe/>}/>
   </Routes>

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1302";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Fetch Pokémon list on mount
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(POKEMON_API_URL);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchTerm.toLowerCase())
  );

  const showPokemon = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Error fetching Pokémon: ${response.statusText}`);
        return;
      }
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  return (
    <>
      <Navbar/>
      <Mainbar/>
      <Header/>
      <NavButtons/>
      <main>
        {selectedPokemon && (
          <div className="pokemon-details">
            <h2>{selectedPokemon.name}</h2>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />
            <p>Height: {selectedPokemon.height}</p>
            <p>Weight: {selectedPokemon.weight}</p>

            {selectedPokemon.stats.map((stat, index) => (
              <div key={index}>
                <p>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <ul>
          {filteredPokemonList.map((pokemon, index) => (
            <li key={index} className="pokemon-item">
              <a href="#" onClick={() => showPokemon(pokemon.url)}>
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <AboutMe/>
      <Socials/>
      <Footer/>
    </>
  );

}
export default App;
