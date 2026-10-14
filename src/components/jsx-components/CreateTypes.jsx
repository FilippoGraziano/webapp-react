import { useEffect, useState } from "react"
import axios from "axios"
import "../css-components/CreateTypes.css"

const CreateTypes = ({ formDataTypes, setFormDataTypes }) => {

    const { type_id } = formDataTypes;

    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/types/`)
            .then(res => setTypes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (

        <div id="types-data">

            <h1>Add Type/Types</h1>

            <select value={type_id} onChange={e => setFormDataTypes({...formDataTypes, type_id: Number(e.target.value)})}>
                <option value="">Choose the pokemon type</option>
                {types !== undefined && types.map(type => (

                    <option key={type.id} value={type.id}>{type.type}</option>

                ))}
            </select>

            {/* TODO: possibilty of add a second type */}

        </div>

    )

}

export default CreateTypes