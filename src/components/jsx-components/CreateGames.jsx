import { useEffect, useMemo, useState } from "react";
import "../css-components/CreateGames.css";
import axios from "axios"

const CreateGames = ({ pokemonId, formDataGames, setFormDataGames }) => {

    const [games, setGames] = useState([]);
    const [zoneCheck, setZoneCheck] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/games/`)
            .then(res => setGames(res.data))
            .catch(err => console.error(err));
    }, [])

    const handleFormData = e => {
        const value = e.target.type === `number` || e.target.name === `game_id` ?
            Number(e.target.value) :
            e.target.type === `checkbox` ?
                e.target.checked :
                e.target.value;

        return setFormDataGames({ ...formDataGames, [e.target.name]: value });
    };

    return (

        <div id="games-data">

            <h1>Add Games</h1>

            <select required name="game_id" value={formDataGames.game_id} onChange={handleFormData} >
                <option value="">Choose a game</option>
                {games !== undefined && games.map(game => (

                    <option key={game.id} value={game.id}>{game.name}</option>

                ))}
            </select>

            <label>
                Regional pokedex number:
                <input required type="number" name="pokemon_n_regional" min={1} value={formDataGames.pokemon_n_regional} onChange={handleFormData} />
            </label>

            <label>
                There are pokedex zone in this game?
                <input type="checkbox" value={zoneCheck} onChange={e => (setZoneCheck(!zoneCheck), setFormDataGames({ ...formDataGames, pokedex_zone: null }))} />
            </label>

            {zoneCheck &&
                <select name="pokedex_zone" value={formDataGames.pokedex_zone} onChange={handleFormData} >
                    <option value="">Choose a pokedex zone</option>
                    <option value="central">Central</option>
                    <option value="mountain">Mountain</option>
                    <option value="coastal">Coastal</option>
                    <option value="akala">Akala</option>
                    <option value="melemele">Melemele</option>
                    <option value="poni">Poni</option>
                    <option value="ulaula">Ulaula</option>
                </select>
            }

            <label>
                In this game, the pokemon has a regional form?
                <input type="checkbox" name="regional_form" value={formDataGames.regional_form} onChange={handleFormData} />
            </label>

            {/* TODO: add possibility to insert more than one game */}

        </div>

    );

};

export default CreateGames