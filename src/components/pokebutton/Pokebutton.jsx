import React from 'react'
import Pokeball from '../../assets/svg/pokeball.svg';

export default function Pokebutton({handleClick}) {
    return (
        <div>
            <Pokeball onClick={handleClick}/>
        </div>
    )
}
