import React from 'react'

import './PokemonCard.scss'

const PokemonCard = ({ name, sprites, id }) =>  {
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={sprites.front_default} alt=""/>
        <p className="Pokecard-p">{`Pokedex number : ${id}`}</p>
      </div>
    )
}

export default PokemonCard;
