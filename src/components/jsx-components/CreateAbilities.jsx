import { useEffect, useMemo, useState } from "react";
import "../css-components/CreateAbilities.css";
import axios from "axios";

const CreateAbilities = ({ formDataAbilities, setFormDataAbilities }) => {

    const { ability_id, primary_ability, secondary_ability, special_ability } = formDataAbilities;

    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/abilities/`)
            .then(res => setAbilities(res.data))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        if (primary_ability) return setFormDataAbilities({ ...formDataAbilities, secondary_ability: false, special_ability: false })
    }, [primary_ability]);
    useEffect(() => {
        if (secondary_ability) return setFormDataAbilities({ ...formDataAbilities, primary_ability: false, special_ability: false })
    }, [secondary_ability]);
    useEffect(() => {
        if (special_ability) return setFormDataAbilities({ ...formDataAbilities, secondary_ability: false, primary_ability: false })
    }, [special_ability]);

    const abilityEffect = useMemo(() => {

        const filteredAbility = abilities.filter(ab => ab.id === ability_id)[0];

        if (filteredAbility !== undefined) return filteredAbility.effect

        return;
    }, [ability_id])

    const handleFormData = e => {
        const value = e.target.type === `select-one` ?
            Number(e.target.value) :
            e.target.type === `checkbox` ?
                e.target.checked : e.target.value;

        return setFormDataAbilities({ ...formDataAbilities, [e.target.name]: value });
    };

    return (

        <div id="abilities-data">

            <h1>Add abilities</h1>

            <select required name="ability_id" value={ability_id} onChange={handleFormData}>
                <option value="">Choose an ability</option>
                {abilities !== undefined && abilities.map(ab => (

                    <option key={ab.id} value={ab.id}>{ab.name}</option>

                ))}
            </select>
            {abilityEffect !== undefined && <p>Effect: {abilityEffect}  </p>}

            <label>
                primary:
                <input type="checkbox" name="primary_ability" checked={primary_ability} onChange={handleFormData} />
            </label>

            <label>
                secondary:
                <input type="checkbox" name="secondary_ability" checked={secondary_ability} onChange={handleFormData} />
            </label>

            <label>
                special:
                <input type="checkbox" name="special_ability" checked={special_ability} onChange={handleFormData} />
            </label>

            {/* TODO: add possibility to add more than 1 ability */}

        </div>

    );

};

export default CreateAbilities