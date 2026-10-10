
import { useParams } from "react-router";
import "../css-pages/CreatePokemonDetails.css";
import CreateStats from "../../components/jsx-components/CreateStats";
import CreateAbilities from "../../components/jsx-components/CreateAbilities";
import CreateTypes from "../../components/jsx-components/CreateTypes";
import CreateGames from "../../components/jsx-components/CreateGames";
import CreateMoves from "../../components/jsx-components/CreateMoves";
import CreateEvolutions from "../../components/jsx-components/CreateEvolutions";

const CreatePokemonDetails = () => {

    const { id } = useParams()

    return (
        <>
            <CreateEvolutions pokemonId={id} />
            {/* <CreateStats pokemonId={id} />
            <CreateAbilities pokemonId={id} />
            <CreateTypes pokemonId={id} />
            <CreateGames pokemonId={id} />
            <CreateMoves pokemonId={id} /> */}
        </>
    );

};

export default CreatePokemonDetails