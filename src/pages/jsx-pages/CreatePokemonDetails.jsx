
import { useParams } from "react-router";
import "../css-pages/CreatePokemonDetails.css";
import CreateStats from "../../components/jsx-components/CreateStats";
import CreateAbilities from "../../components/jsx-components/CreateAbilities";
import CreateTypes from "../../components/jsx-components/CreateTypes";
import CreateGames from "../../components/jsx-components/CreateGames";
import CreateMoves from "../../components/jsx-components/CreateMoves";
import CreateEvolutions from "../../components/jsx-components/CreateEvolutions";
import { useState } from "react";

const formDataEvolutionInit = {
    evo_type: ``,
    item_id: 0,
    evo_method: ``,
    evo_pokemon_id: ``,
};
const formDataStatsInit = {

};
const formDataAbilitiesInit = {

};
const formDataTypesInit = {

};
const formDataGamesInit = {

};
const formDataMovesInit = {

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