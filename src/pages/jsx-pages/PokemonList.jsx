import "../css-pages/PokemonList.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router"

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/pokemon`)
            .then(res => setPokemon(res.data))
            .catch(err => console.error(`pokemon error`, err));
    }, [])
    
    return (

        <ul id="pokemon-list">

            {pokemon.map(pok => (

                <li className="pokemon-card" key={pok.id}>

                    <h2>{pok.name}</h2>
                    <img src={`http://localhost:3000/pokemon-img/${pok.image}`} alt={pok.name} />
                    <span className="generation">Generation: {pok.generation}</span>
                    <span className="internationa-pokedex">International pokedex: {pok.n_international}</span>
                    <Link to={`/${pok.id}`}> Dettagli </Link>
                    
                </li>

            ))}

        </ul>

    )

}

export default Pokemon