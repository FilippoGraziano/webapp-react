import "../css-components/CreateStats.css";

const CreateStats = ({ formDataStats, setFormDataStats }) => {

    const { tot_stats, ps, attack, defense, sp_attack, sp_defense, speed } = formDataStats;

    const handleFormData = e => {
        const value = e.target.valueAsNumber;
        return setFormDataStats({ ...formDataStats, [e.target.name]: value });
    };

    return (

        <div id="stats-data">

            <h1>Add Stats</h1>

            <label>
                Total stats:
                <input required name="tot_stats" min={6} max={1530} type="number" value={tot_stats} onChange={handleFormData} />
            </label>

            <label>
                Ps:
                <input required name="ps" min={1} max={255} type="number" value={ps} onChange={handleFormData} />
            </label>

            <label>
                Attack:
                <input required name="attack" min={1} max={255} type="number" value={attack} onChange={handleFormData} />
            </label>

            <label>
                Defense:
                <input required name="defense" min={1} max={255} type="number" value={defense} onChange={handleFormData} />
            </label>

            <label>
                Special Attack:
                <input required name="sp_attack" min={1} max={255} type="number" value={sp_attack} onChange={handleFormData} />
            </label>

            <label>
                Special Defense:
                <input required name="sp_defense" min={1} max={255} type="number" value={sp_defense} onChange={handleFormData} />
            </label>

            <label>
                Speed:
                <input required name="speed" min={1} max={255} type="number" value={speed} onChange={handleFormData} />
            </label>

        </div>

    );

};

export default CreateStats