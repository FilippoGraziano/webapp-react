
import { use, useEffect, useState } from "react";
import axios from "axios";
import "../css-components/CreateEvolutions.css";

const CreateEvolutions = ({pokemonId, formDataEvolution, setFormDataEvolution}) => {

    const [item, setItem] = useState([])
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/items/`)
            .then(res => setItem(res.data))
            .catch(err => console.error(err));
        axios.get(`http://localhost:3000/pokemon/`)
            .then(res => setPokemon(res.data))
            .catch(err => console.error(err));
    }, [])
    const evoItem = item.filter(item => item.type === `evolution`);

    const handleFormData = e => {
        const value = e.target.value;
        return setFormDataEvolution({ ...formDataEvolution, [e.target.name]: value });
    };

    return (

        <div id="evolutions-data">

            <h1>Add Evolution</h1>

            <select required name="evo_type" value={formDataEvolution.evo_type} onChange={handleFormData}>
                <option value="">Select the type of evolution</option>
                <option value="item">Item</option>
                <option value="level">Level</option>
                <option value="trade">Trade</option>
            </select>

            {formDataEvolution.evo_type === `level` &&
                <label>
                    Level:
                    <input name="evo_method" min={1} max={80} type="number" value={formDataEvolution.evo_method} onChange={handleFormData} />
                </label>
            }

            {formDataEvolution.evo_type === `item` &&

                <select name="item_id" value={formDataEvolution.item_id} onChange={handleFormData}>
                    <option value="">Select an item</option>
                    {evoItem !== undefined && evoItem.map(item => (

                        <option key={item.id} value={item.id}>{item.name}</option>

                    ))}
                </select>

            }

            {/* TODO: evo_method for item */}
            {/* TODO: evo_method for trade */}

            <select name="evo_pokemon_id" value={formDataEvolution.evo_pokemon_id} onChange={handleFormData} >
                <option value="" disabled>Choose the evolved pokemon</option>
                {pokemon !== undefined && pokemon.map(pok => (

                    <option key={pok.id} value={pok.id}>{pok.name}</option>

                ))}
            </select>

        </div>

    );

};

export default CreateEvolutions