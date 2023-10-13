




function NavBar({pokemons, setClickedPokemon, clickedPokemon}) {
    console.log(pokemons)
    
  
    
    const handlePokemon = (index) => {
      setClickedPokemon(index)
    }
    
    return (
        <div>
          
          {pokemons.map((poke, index) => {
              return <button key={index}
              onClick={() => {handlePokemon(index)}}> {poke.name}</button>
          
          })
          }
          </div>
      ) 
      
    }







export default NavBar;