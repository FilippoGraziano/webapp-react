
import { useState } from "react";
import "../css-components/CreateEvolutions.css";

const formdataInit = {
    evo_type: ``,
    item_id: 0,
    evo_method: ``,
    evo_pokemon_id: ``,
};

const CreateEvolutions = props => {

    const [formData, setFormData] = useState(formdataInit);

    const handleFormData = e => {

        const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;

        return setFormData({ ...formData, [e.target.name]: value });

    };

    return (

        <form onSubmit={e => (

            e.preventDefault(),

            setFormData(formdataInit)

        )}>

            <select name="evo_type" value={formData.evo_type} onChange={handleFormData}>
                <option value="">Select the type of evolution</option>
                <option value="item">Item</option>
                <option value="level">Level</option>
                <option value="trade">Trade</option>
            </select>

            <button type="submit">Submit</button>

        </form>

    );

};

export default CreateEvolutions