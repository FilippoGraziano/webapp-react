
import { useNavigate, useParams } from "react-router";
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
    item_id: null,
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

    const navigate = useNavigate();

    const [hasEvolution, setHasEvolution] = useState(false);
    const [formDataEvolution, setFormDataEvolution] = useState(formDataEvolutionInit);
    const [formDataStats, setFormDataStats] = useState(formDataStatsInit);
    const [formDataAbilities, setFormDataAbilities] = useState(formDataAbilitiesInit);
    const [formDataTypes, setFormDataTypes] = useState(formDataTypesInit);
    const [formDataGames, setFormDataGames] = useState(formDataGamesInit);
    const [formDataMoves, setFormDataMoves] = useState(formDataMovesInit);
    const [errorMessage, setErrorMessage] = useState(``);

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/pokemon/id/${pokemonId}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => console.log(`Evolution`, formDataEvolution), [formDataEvolution]);
    useEffect(() => console.log(`Stats`, formDataStats), [formDataStats]);
    useEffect(() => console.log(`Abilities`, formDataAbilities), [formDataAbilities]);
    useEffect(() => console.log(`Types`, formDataTypes), [formDataTypes]);
    useEffect(() => console.log(`games`, formDataGames), [formDataGames]);
    useEffect(() => console.log(`Moves`, formDataMoves), [formDataMoves]);

    return (
        <form onSubmit={async e => {
            e.preventDefault();

            setErrorMessage(``);
            try {

                console.log(`Inizio creazione dati...`);

                let evoResponse;
                hasEvolution ?
                    evoResponse = await axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/evolution`, formDataEvolution)
                        .then(res => console.log(`Add evolution to pokemon with id: ${pokemonId}`, res.data)) :
                    undefined;

                const statsResponse = await axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/stats`, formDataStats);
                console.log(`Add stast to pokemon with id: ${pokemonId}`, statsResponse.data)

                const abilitiesResponse = await axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/abilities`, formDataAbilities);
                console.log(`Add abilities to pokemon with id: ${pokemonId}`, abilitiesResponse.data)

                const typesResponse = await axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/types`, formDataTypes);
                console.log(`Add types to pokemon with id: ${pokemonId}`, typesResponse.data)

                const gamesResponse = await axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/games`, formDataGames);
                console.log(`Add games to pokemon with id: ${pokemonId}`, gamesResponse.data)

                const movesResponse = await axios.post(`http://localhost:3000/pokemon/id/${pokemonId}/moves`, formDataMoves);
                console.log(`Add moves to pokemon with id: ${pokemonId}`, movesResponse.data)

            } catch (err) {
                setErrorMessage(err.response.data.message);
                console.error(`errore trovato:`, err.response.data.message);

                console.log(`Cancellazione di tutti i dati creati, a causa dell'errore...`);

                hasEvolution ?
                    (axios.delete(`http://localhost:3000/pokemon/id/${pokemonId}/evolution`),
                        console.log(`evolution rimossa`)) :
                    console.log(`non c'è evolution`);

                axios.delete(`http://localhost:3000/pokemon/id/${pokemonId}/stats`);
                console.log(`stats rimosse`);

                axios.delete(`http://localhost:3000/pokemon/id/${pokemonId}/abilities`);
                console.log(`abilities rimosse`);

                axios.delete(`http://localhost:3000/pokemon/id/${pokemonId}/types`);
                console.log(`types rimosse`);

                axios.delete(`http://localhost:3000/pokemon/id/${pokemonId}/games`);
                console.log(`games rimosse`);

                axios.delete(`http://localhost:3000/pokemon/id/${pokemonId}/moves`);
                console.log(`moves rimosse`);

                console.log(`Dati rimossi e pronti ad essere ricreati`)

            }

        }}>

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