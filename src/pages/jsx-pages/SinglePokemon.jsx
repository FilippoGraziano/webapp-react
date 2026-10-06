import { useParams } from "react-router";
import "../css-pages/SinglePokemon.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const SinglePokemon = () => {

    const [pokemon, setPokemon] = useState({})
    const { name } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/pokemon/name/${name}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.error(`single pokemon`, err));

    }, [])

    let movesByLevel = [];
    let movesByMt = [];
    let movesByMn = [];

    if (pokemon.moves !== undefined) {
        movesByLevel = pokemon.moves.filter(move => move.learning_level)
        movesByMt = pokemon.moves.filter(move => move.mt)
        movesByMn = pokemon.moves.filter(move => move.mn)
    }

    return (
        <div className="pokemon-detail">

            <h1>{pokemon.name}</h1>

            <span className="regional-pokedex">Kanto pokedex: {pokemon.n_regional}°</span>
            <span className="international-pokedex">International pokedex: {pokemon.n_international}°</span>
            <span className="generation">{pokemon.generation}° generation</span>

            <img src={`http://localhost:3000/pokemon-img/${pokemon.image}`} alt={`${pokemon.name}-img`} />

            <h2>Type</h2>
            <section className="types">

                {pokemon.types !== undefined && <>
                    <span>{pokemon.types[0]}</span>
                    {pokemon.types.length === 2 && <span>{pokemon.types[1]}</span>}
                </>}

            </section>


            <p>Description: {pokemon.description}</p>

            {pokemon.evolution_level && <span className="level-evolution">Level evolution: {pokemon.evolution_level} </span>}
            {pokemon.evolution_stone !== null ? <span className="stone-evolution">It can evolve using a {pokemon.evolution_stone} </span> : undefined}
            {pokemon.evolution_friendship === 1 ? <span className="friendship-evolution">It can evolve at max friendship</span> : undefined}

            {pokemon.trade_item !== null && pokemon.evolution_trade !== 0 ? 
                <span className="trade-evolution">It can evolve with a trade holding {pokemon.trade_item}</span> : 
                pokemon.evolution_trade === 1 ? 
                <span className="trade-evolution">It can evolve with a trade</span> : 
                undefined
            }

            <span className="height">Height: {pokemon.height} m</span>
            <span className="weight">Weight: {pokemon.weight} Kg</span>

            <span className="male">Male probability: {pokemon.male} %</span>
            <span className="female">Female probability: {pokemon.female} %</span>

            <h2>Pokemon abilities</h2>
            <section className="abilities">

                {pokemon.abilities !== undefined && pokemon.abilities.map(ab => (

                    <p key={ab.id}>

                        {
                            ab.primary_ability === 1 ?
                                `Primary ability: ${ab.name}` :
                                ab.secondary_ability === 1 ?
                                    `Secondary ability: ${ab.name}` : `Special ability: ${ab.name}`
                        }

                        <span>Effect: {ab.effect}</span>

                    </p>

                ))}

            </section>

            <h2>Pokemon stats</h2>
            <section className="stats">

                {pokemon.stats !== undefined && <>
                    <span className="tot-stats">Total stats: {pokemon.stats.tot_stats}</span>
                    <span>Attack: {pokemon.stats.attack}</span>
                    <span>Defense: {pokemon.stats.defense}</span>
                    <span>Special attack: {pokemon.stats.sp_attack}</span>
                    <span>Special defense: {pokemon.stats.sp_defense}</span>
                    <span>Speed: {pokemon.stats.speed}</span>
                </>}

            </section>

            <h2>Regions</h2>
            <section>
                {pokemon.regions !== undefined && pokemon.regions.map(region => (

                    <div key={region.id} className="single-move">

                        <span>Regional number: {region.pokemon_n_regional}°</span>

                        <span>Region name: {region.name}</span>

                        <span>Game name: {region.game_name}</span>

                        {region.regional_version !== 0 && <span>Have a regionl form</span>}

                    </div>

                ))}
            </section>

            <h2>Moves learning by level</h2>
            <section className="moves-level">

                {movesByLevel.map(move => (

                    <div className="single-move" key={move.id}>

                        <h4>{move.name}</h4>

                        <span>{move.type}</span>
                        <p>Effect: {move.effect}</p>

                        <span>Attack type: {move.attack_type}</span>
                        <span>Damage: {move.damage ? move.damage : 0}</span>
                        <span>Accuracy: {move.accuracy}</span>
                        <span>Learning level: {move.learning_level}</span>

                    </div>


                ))}

            </section>

            <h2>Moves learning by MT</h2>
            <section className="moves-mt">

                {movesByMt.map(move => (

                    <div className="single-move" key={move.id}>

                        <h4>{move.name}</h4>

                        <span>{move.type}</span>
                        <p>Effect: {move.effect}</p>

                        <span>Attack type: {move.attack_type}</span>
                        <span>Damage: {move.damage ? move.damage : 0}</span>
                        <span>Accuracy: {move.accuracy}</span>
                        <span>N° {move.mt}</span>

                    </div>


                ))}

            </section>

            <h2>Moves learning by MN</h2>
            <section className="moves-mn">

                {movesByMn.map(move => (

                    <div className="single-move" key={move.id}>

                        <h4>{move.name}</h4>

                        <span>{move.type}</span>
                        <p>Effect: {move.effect}</p>

                        <span>Attack type: {move.attack_type}</span>
                        <span>Damage: {move.damage ? move.damage : 0}</span>
                        <span>Accuracy: {move.accuracy}</span>
                        <span>N° {move.mn}</span>

                    </div>


                ))}

            </section>

        </div>
    )

}

export default SinglePokemon