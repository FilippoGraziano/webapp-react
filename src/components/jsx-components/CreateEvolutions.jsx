
import { use, useEffect, useMemo, useState } from "react";
import axios from "axios";
import "../css-components/CreateEvolutions.css";

const CreateEvolutions = ({ formDataEvolution, setFormDataEvolution }) => {

    const { evo_type, item_id, evo_method, evo_pokemon_id } = formDataEvolution;

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

    const evoItem = useMemo(() => item.filter(item => item.type === `evolution`), [item])
    const [selectedItem] = useMemo(() => item.filter(item => item.id === item_id), [item_id])

    useEffect(() => setFormDataEvolution({ ...formDataEvolution, evo_method: ``, item_id: null }), [evo_type])
    useEffect(() => {
        if (evo_type === `trade`) return setFormDataEvolution({ ...formDataEvolution, item_id: 0 })
    }, [evo_method])

    const handleFormData = e => {
        const value = e.target.name === `item_id` ||
            (e.target.name === `evo_method` && e.target.type === `number`) || e.target.name === `evo_pokemon_id` ?
                Number(e.target.value) :
                e.target.value;

        return setFormDataEvolution({ ...formDataEvolution, [e.target.name]: value });
    };

    return (

        <div id="evolutions-data">

            <h1>Add Evolution</h1>

            <select required name="evo_type" value={evo_type} onChange={handleFormData}>
                <option value="">Select the type of evolution</option>
                <option value="item">Item</option>
                <option value="level">Level</option>
                <option value="trade">Trade</option>
            </select>

            {evo_type === `level` &&
                <label>
                    Level:
                    <input required name="evo_method" min={1} max={80} type="number" value={evo_method} onChange={handleFormData} />
                </label>
            }

            {evo_type === `trade` &&
                <select required name="evo_method" value={evo_method} onChange={handleFormData}>
                    <option value="">Choose the trade method</option>
                    <option value="trade">Trade</option>
                    <option value="trade with item">Trade with item</option>
                </select>
            }

            {(evo_type === `item` || evo_method === `trade with item`) &&

                <select required name="item_id" value={item_id} onChange={handleFormData}>
                    <option value="">Select an item</option>
                    {evoItem !== undefined && evoItem.map(item => (

                        <option key={item.id} value={item.id}>{item.name}</option>

                    ))}
                </select>

            }

            {evo_type === `item` &&
                <select required name="evo_method" value={evo_method} onChange={handleFormData} >
                    <option value="">Choose the method with item</option>
                    {selectedItem !== undefined && <option value={`Use ${selectedItem.name}`}>Using {selectedItem.name}</option>}
                </select>
            }

            <select required name="evo_pokemon_id" value={evo_pokemon_id} onChange={handleFormData} >
                <option value="" disabled>Choose the evolved pokemon</option>
                {pokemon !== undefined && pokemon.map(pok => (

                    <option key={pok.id} value={pok.id}>{pok.name}</option>

                ))}
            </select>

        </div>

    );

};

export default CreateEvolutions