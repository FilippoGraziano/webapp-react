import { useEffect, useState } from "react"
import axios from "axios"
import "../css-components/CreateTypes.css"

const CreateTypes = ({ formDataTypes, setFormDataTypes }) => {

    const { type_id, type_id2 } = formDataTypes;

    const [types, setTypes] = useState([]);
    const [checkTypes2, setCheckTypes2] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/types/`)
            .then(res => setTypes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (

        <div id="types-data">

            <h1>Add Type/Types</h1>

            <select value={type_id} onChange={e => setFormDataTypes({ ...formDataTypes, type_id: Number(e.target.value) })}>
                <option value="">Choose the pokemon type</option>
                {types !== undefined && types.map(type => (

                    <option key={type.id} value={type.id}>{type.type}</option>

                ))}
            </select>

            <label>
                The pokemon has a second type?
                <input type="checkbox" checked={checkTypes2} onChange={e => (setCheckTypes2(!checkTypes2), setFormDataTypes({ ...formDataTypes, type_id2: null }))} />
            </label>

            {checkTypes2 &&
                <select value={type_id2} onChange={e => setFormDataTypes({ ...formDataTypes, type_id2: Number(e.target.value) })}>
                    <option value="">Choose the pokemon second type</option>
                    {types !== undefined && types.map(type => (

                        <option key={type.id} value={type.id}>{type.type}</option>

                    ))}
                </select>
            }

        </div>

    )

}

export default CreateTypes