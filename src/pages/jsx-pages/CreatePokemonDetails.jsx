
import { useParams } from "react-router";
import "../css-pages/CreatePokemonDetails.css";
import CreateStats from "../../components/jsx-components/CreateStats";
import CreateAbilities from "../../components/jsx-components/CreateAbilities";
import CreateTypes from "../../components/jsx-components/CreateTypes";
import CreateGames from "../../components/jsx-components/CreateGames";
import CreateMoves from "../../components/jsx-components/CreateMoves";
import { useState } from "react";
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
    learning_level: 0,
    learning_egg: false,
    learning_move_tutor:false,
    learning_mt: false,
    learning_mn: false
};

const CreatePokemonDetails = () => {

    const { id } = useParams()
    const [formDataEvolution, setFormDataEvolution] = useState(formDataEvolutionInit);
    const [formDataStats, setFormDataStats] = useState(formDataStatsInit);
    const [formDataAbilities, setFormDataAbilities] = useState(formDataAbilitiesInit);
    const [formDataTypes, setFormDataTypes] = useState(formDataTypesInit);
    const [formDataGames, setFormDataGames] = useState(formDataGamesInit);
    const [formDataMoves, setFormDataMoves] = useState(formDataMovesInit);

    return (
        <>
            {console.log(formDataEvolution)}
            <CreateEvolutions pokemonId={id} formDataEvolutionInit={formDataEvolutionInit} formDataEvolution={formDataEvolution} setFormDataEvolution={setFormDataEvolution} />
            {/* <CreateStats pokemonId={id} />
            <CreateAbilities pokemonId={id} />
            <CreateTypes pokemonId={id} />
            <CreateGames pokemonId={id} />
            <CreateMoves pokemonId={id} /> */}
        </>
    );

};

export default CreatePokemonDetails