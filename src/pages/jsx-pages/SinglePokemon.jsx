import { useParams } from "react-router"
import "../css-pages/SinglePokemon.css"

const SinglePokemon = () => {

    const { id } = useParams()

    return (
        <>
            questa è la pagina del pokemon con id {id}
        </>
    )

}

export default SinglePokemon