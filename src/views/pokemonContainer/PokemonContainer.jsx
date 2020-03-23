import React, {useState} from 'react';
import PokemonForm from '../../components/pokemonForm/PokemonForm';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import {getPokemonByName} from '../../api/service';

import './PokemonContainer.scss'
 
export const PokemonContainer = () => {
    const [pokemonList, setPokemonList] = useState([])

    const catchPokemon = async pokemon => {
        try {
            const pokemonToAdd = await getPokemonByName(pokemon)
            const pokemonsObj = [
                ...pokemonList, {
                    ...pokemonToAdd
                }
            ];
            setPokemonList(pokemonsObj);
        } catch (err) {
            console.log('something went wrong, probably pokemon name doesnt exist')
        }
    }

    return (
        <div>
            <PokemonForm handleCatchPokemon={catchPokemon}/>
            <div className='pokemon-container'>
                {pokemonList.length > 0
                    ? (pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon}/>))
                    : <em>No pokemons selected</em>
}
            </div>
        </div>
    )
}