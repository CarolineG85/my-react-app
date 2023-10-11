
import PropTypes from "prop-types"

function PokemonCard({pokemon}) {
    console.log(pokemon)

    
    return (
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc}></img>  :  <p>???</p>} 
       <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
   
}
  export default PokemonCard;

  