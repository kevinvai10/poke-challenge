import React from 'react'
import { colorDictionary } from '../../resources/dictionary';
import './PokemonCard.scss'

export const getTypeColor = type =>  colorDictionary[type];

const PokemonCard = ({ name, sprites, id, type }) =>  {
    const { type: {name: typeName} } = type;
    const bgColor = getTypeColor(typeName)

    return (
      <div className="Pokecard" style={{backgroundColor: bgColor}}>
        <div className="Description">
          <div className='Sprite'>
            <img src={sprites.front_default} alt=""/>
          </div>
          <div>
            <h4 className="Pokecard-p">{`${name}`}</h4>
            <p className="Pokecard-p">{`${typeName}`}</p>
            <p className="Pokecard-p">{`#${id}`}</p>
          </div>
        </div>
      </div>
    )
}

export default PokemonCard;
