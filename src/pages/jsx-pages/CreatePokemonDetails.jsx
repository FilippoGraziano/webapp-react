
import { useParams } from "react-router";
import "../css-pages/CreatePokemonDetails.css";
import CreateStats from "../../components/jsx-components/CreateStats";
import CreateAbilities from "../../components/jsx-components/CreateAbilities";
import CreateTypes from "../../components/jsx-components/CreateTypes";
import CreateGames from "../../components/jsx-components/CreateGames";
import CreateMoves from "../../components/jsx-components/CreateMoves";
import { useEffect, useState } from "react";
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
    type_id: 0
};
const formDataGamesInit = {

};
const formDataMovesInit = {
    move_id: 0,
    learning_gen: 0,
    learning_level: null,
    learning_egg: false,
    learning_move_tutor:false,
    learning_mt: false,
    learning_mn: false
};

const CreatePokemonDetails = () => {

    const { id } = useParams()
    const [hasEvolution, setHasEvolution] = useState(false)
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
    useEffect(() => console.log(`Moves`, formDataMoves), [formDataMoves]);
    
    return (
        <form onSubmit={e => (
            e.preventDefault(),
            hasEvolution ? setFormDataEvolution(formDataEvolutionInit) : undefined,
            setFormDataStats(formDataStatsInit),
            setFormDataAbilities(formDataAbilitiesInit),
            setFormDataTypes(formDataTypesInit),
            setFormDataGames(formDataGamesInit),
            setFormDataMoves(formDataMovesInit)
        )}>

            <label>
                Does this Pokémon have an evolution?
                <input type="checkbox" value={hasEvolution} onChange={e => setHasEvolution(!hasEvolution)} />
            </label>
            { hasEvolution && <CreateEvolutions pokemonId={id} formDataEvolution={formDataEvolution} setFormDataEvolution={setFormDataEvolution} />}

            <CreateStats pokemonId={id} formDataStats={formDataStats} setFormDataStats={setFormDataStats} />

            <CreateAbilities pokemonId={id} formDataAbilities={formDataAbilities} setFormDataAbilities={setFormDataAbilities} />

            <CreateTypes pokemonId={id} formDataTypes={formDataTypes} setFormDataTypes={setFormDataTypes} />

            {/* <CreateGames pokemonId={id} /> */}

            <CreateMoves pokemonId={id} formDataMoves={formDataMoves} setFormDataMoves={setFormDataMoves} />

            <button type="submit">Submit</button>

        </form>
    );

};

export default CreatePokemonDetails