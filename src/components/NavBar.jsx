



function NavBar({pokemons, setClickedPokemon, useEffect, clickedPokemon}) {
    console.log(pokemons)
    
    
    
      
    const handlePokemon = (index, clickedPokemon) => {
      setClickedPokemon(index)
      clickedPokemon === "pikachu" && alert("pika pikachu !!!") 
      
      
      
      } 
    
    
    return (
        <div>
          
          {pokemons.map((poke, index) => {
              return <button key={index}
              onClick={() => {handlePokemon(index, poke.name)}}
              > {poke.name}</button>
        
          })
          }
          </div>
      ) 
      
}    







export default NavBar;