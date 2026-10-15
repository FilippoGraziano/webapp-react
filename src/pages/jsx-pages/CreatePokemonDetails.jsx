
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css-pages/CreatePokemonDetails.css";
import CreateStats from "../../components/jsx-components/CreateStats";
import CreateAbilities from "../../components/jsx-components/CreateAbilities";
import CreateTypes from "../../components/jsx-components/CreateTypes";
import CreateGames from "../../components/jsx-components/CreateGames";
import CreateMoves from "../../components/jsx-components/CreateMoves";
import CreateEvolutions from "../../components/jsx-components/CreateEvolutions";

const formDataEvolutionInit = {
    evo_type: ``,
    item_id: 0,
    evo_method: ``,
    evo_pokemon_id: ``,
};
const formDataStatsInit = {
    tot_stats: 0,
    ps: 0,
    attack: 0,
    defense: 0,
    sp_attack: 0,
    sp_defense: 0,
    speed: 0
};
const formDataAbilitiesInit = {
    ability_id: 0,
    primary_ability: false,
    secondary_ability: false,
    special_ability: false
};
const formDataTypesInit = {
    type_id: 0,
    type_id2: null
};
const formDataGamesInit = {
    game_id: 0,
    pokemon_n_regional: 0,
    pokedex_zone: null,
    regional_form: false
};
const formDataMovesInit = {
    move_id: 0,
    learning_gen: 0,
    learning_level: null,
    learning_egg: false,
    learning_move_tutor: false,
    learning_mt: false,
    learning_mn: false
};

const CreatePokemonDetails = () => {

    const { id } = useParams();
    const pokemonId = id;

    const [hasEvolution, setHasEvolution] = useState(false);
    const [formDataEvolution, setFormDataEvolution] = useState(formDataEvolutionInit);
    const [formDataStats, setFormDataStats] = useState(formDataStatsInit);
    const [formDataAbilities, setFormDataAbilities] = useState(formDataAbilitiesInit);
    const [formDataTypes, setFormDataTypes] = useState(formDataTypesInit);
    const [formDataGames, setFormDataGames] = useState(formDataGamesInit);
    const [formDataMoves, setFormDataMoves] = useState(formDataMovesInit);

    useEffect(() => console.log(`Evolution`, formDataEvolution), [formDataEvolution]);
    useEffect(() => console.log(`Stats`, formDataStats), [formDataStats]);
    useEffect(() => console.log(`Abilities`, formDataAbilities), [formDataAbilities]);
    useEffect(() => console.log(`Types`, formDataTypes), [formDataTypes]);
    useEffect(() => console.log(`games`, formDataGames), [formDataGames]);
    useEffect(() => console.log(`Moves`, formDataMoves), [formDataMoves]);

    return (
        <form onSubmit={e => (
            e.preventDefault(),
            
            hasEvolution ?
                axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/evolution`, formDataEvolution)
                    .then(res => console.log(`Add evolution to pokemon with id: ${pokemonId}`, res.data))
                    .catch(err => console.error(err)) :
                undefined,
            hasEvolution ? setFormDataEvolution(formDataEvolutionInit) : undefined,

            axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/stats`, formDataStats)
                .then(res => console.log(`Add stats to pokemon with id: ${pokemonId}`, res.data))
                .catch(err => console.error(err)),
            setFormDataStats(formDataStatsInit),

            axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/abilities`, formDataAbilities)
                .then(res => console.log(`Add abilities to pokemon with id: ${pokemonId}`, res.data))
                .catch(err => console.error(err)),
            setFormDataAbilities(formDataAbilitiesInit),

            axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/types`, formDataTypes)
                .then(res => console.log(`Add types to pokemon with id: ${pokemonId}`, res.data))
                .catch(err => console.error(err)),
            setFormDataTypes(formDataTypesInit),

            axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/games`, formDataGames)
                .then(res => console.log(`Add games to pokemon with id: ${pokemonId}`, res.data))
                .catch(err => console.error(err)),
            setFormDataGames(formDataGamesInit),

            axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/moves`, formDataMoves)
                .then(res => console.log(`Add moves to pokemon with id: ${pokemonId}`, res.data))
                .catch(err => console.error(err)),
            setFormDataMoves(formDataMovesInit)

        )}>

            <label>
                Does this Pokémon have an evolution?
                <input type="checkbox" checked={hasEvolution} onChange={e => (setHasEvolution(!hasEvolution), setFormDataEvolution(formDataEvolutionInit))} />
            </label>
            {hasEvolution && <CreateEvolutions formDataEvolution={formDataEvolution} setFormDataEvolution={setFormDataEvolution} />}

            <CreateStats formDataStats={formDataStats} setFormDataStats={setFormDataStats} />

            <CreateAbilities formDataAbilities={formDataAbilities} setFormDataAbilities={setFormDataAbilities} />

            <CreateTypes formDataTypes={formDataTypes} setFormDataTypes={setFormDataTypes} />

            <CreateGames formDataGames={formDataGames} setFormDataGames={setFormDataGames} />

            <CreateMoves formDataMoves={formDataMoves} setFormDataMoves={setFormDataMoves} />

            <button type="submit">Submit</button>

        </form>
    );

};

export default CreatePokemonDetails