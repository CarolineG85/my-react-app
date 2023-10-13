import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  

function App() {

  const [clickedPokemon, setClickedPokemon] = useState(0)




  return (
      <div>
        <PokemonCard pokemon={pokemonList[clickedPokemon]}/> 
        
        <NavBar name={pokemonList.name} pokemons={pokemonList} setClickedPokemon={setClickedPokemon} clickedPokemon={clickedPokemon} />
 
      </div>
    ) 
    
  }
  
  

export default App;

