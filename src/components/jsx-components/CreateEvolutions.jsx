
import { useEffect, useState } from "react";
import axios from "axios";
import "../css-components/CreateEvolutions.css";

const formdataInit = {
    evo_type: ``,
    item_id: 0,
    evo_method: ``,
    evo_pokemon_id: ``,
};

const CreateEvolutions = props => {

    const [formData, setFormData] = useState(formdataInit);
    const [Item, setItem] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/items/`)
            .then(res => setItem(res.data))
            .catch(err => console.error(err));
    }, [])
    const evoItem = Item.filter(item => item.type === `evolution`);

    const handleFormData = e => {
        const value = e.target.value;
        return setFormData({ ...formData, [e.target.name]: value });
    };

    return (

        <form onSubmit={e => (

            e.preventDefault(),

            setFormData(formdataInit)

        )}>

            <select required name="evo_type" value={formData.evo_type} onChange={handleFormData}>
                <option value="">Select the type of evolution</option>
                <option value="item">Item</option>
                <option value="level">Level</option>
                <option value="trade">Trade</option>
            </select>

            {formData.evo_type === `level` && <input name="evo_method" min={1} max={80} type="number" value={formData.evo_method} onChange={handleFormData} />}

            {formData.evo_type === `item` &&

                <select name="" id="">
                    <option value="">Select an item</option>
                    {evoItem !== undefined && evoItem.map(item => (

                        <option key={item.id} value={item.id}>{item.name}</option>

                    ))}
                </select>

            }

            {/* TODO: evo_method for trade */}
            {/* TODO: a select that choose the evolved pokemon  */}

            <button type="submit">Submit</button>

        </form>

    );

};

export default CreateEvolutions