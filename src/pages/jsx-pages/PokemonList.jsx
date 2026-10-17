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

                    <Link to={`/${pok.name}`}>

                        <h3>{pok.name}</h3>

                        <img src={`http://localhost:3000/pokemon-img/${pok.image}`} alt={`${pokemon.name}-img`} />

                        <span className="types">{console.log(pok.type)}</span>

                    </Link>

                </li>

            ))}

        </ul>

    )

}

export default Pokemon