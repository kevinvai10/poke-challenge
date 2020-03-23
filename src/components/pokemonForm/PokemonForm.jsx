import React, {useState} from 'react'
import './PokemonForm.scss'

// don't do this
const imgUrl = 'https://lh3.googleusercontent.com/proxy/0Un5_tYh5rmPJt-TA4KFunZciNIkyd9dYxmlCn0t' +
        '759pDUuUTQrssOQXfmDhOEbAJCQeIg9xgh-Rq3VvpUhKR43K51nLNnpxqjJ-SQneeLjSRONcwCQ958A7' +
        'h5WkqWhO';

const PokemonForm = ({handleCatchPokemon}) => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        //call ancestor function
        handleCatchPokemon(text.toLocaleLowerCase().trim());
        setText('');
    }

    return (
        <div className='pokemon-form'>
            <form onSubmit={handleSubmit}>
                <input
                    className='pokemon-input'
                    type='text'
                    value={text}
                    required={true}
                    placeholder='Type pokemon name'
                    onChange={e => setText(e.target.value)}/>
                <button type='submit'><img src={imgUrl} alt="pokeball" height={'30px'}/></button>
            </form>
        </div>
    )
}

export default PokemonForm