import { useEffect, useMemo, useState } from "react";
import "../css-components/CreateAbilities.css";
import axios from "axios";

const CreateAbilities = ({ pokemonId, formDataAbilities, setFormDataAbilities }) => {

    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/abilities/`)
            .then(res => setAbilities(res.data))
            .catch(err => console.error(err));
    }, [])

    const abilityEffect = useMemo(() => {

        const filteredAbility = abilities.filter(ab => ab.id === formDataAbilities.ability_id)[0];

        if (filteredAbility !== undefined) return filteredAbility.effect

        return;
    }, [formDataAbilities.ability_id])

    const handleFormData = e => {
        const value = e.target.type === `select-one` ?
            Number(e.target.value) :
            e.target.type === `checkbox` ?
                e.target.checked : e.target.value;

        return setFormDataAbilities({ ...formDataAbilities, [e.target.name]: value });
    };

    return (

        <div id="abilities-data">

            <select required name="ability_id" value={formDataAbilities.ability_id} onChange={handleFormData}>
                <option value="">Choose an ability</option>
                {abilities !== undefined && abilities.map(ab => (

                    <option key={ab.id} value={ab.id}>{ab.name}</option>

                ))}
            </select>
            {abilityEffect !== undefined && <p>Effect: {abilityEffect}  </p>}

            {/* TODO: selection fot he type of ability */}

        </div>

    );

};

export default CreateAbilities