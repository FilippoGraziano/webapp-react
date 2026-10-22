import "../css-pages/PokemonList.css"
import "../../pokemonTypes.css"
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

                <li className={pok.types.length === 2 ?
                    `pokemon-card border-left${pok.types[0]} border-right${pok.types[1]}` :
                    `pokemon-card border${pok.types[0]}`
                }
                    data-status={pok.name} key={pok.id}
                >

                    <Link to={`/${pok.name}`}>

                        <h3>{pok.name}</h3>

                        <img src={`http://localhost:3000/pokemon-img/${pok.image}`} alt={`${pokemon.name}-img`} />

                    </Link>

                    {pok.types.length === 2 ?
                        <>
                            <span className={`type${pok.types[0]}`}>
                                {pok.types[0]}
                            </span>
                            /
                            <span className={`type${pok.types[1]}`}>
                                {pok.types[1]}
                            </span>
                        </> :
                        <span className={`type${pok.types[0]}`}>
                            {pok.types[0]}
                        </span>
                    }

                </li>

            ))}

        </ul>

    )

}

export default Pokemon