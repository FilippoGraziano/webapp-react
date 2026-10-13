import "../css-components/CreateStats.css";

const CreateStats = ({ pokemonId, formDataStats, setFormDataStats }) => {


    const handleFormData = e => {
        const value = e.target.valueAsNumber;
        return setFormDataStats({ ...formDataStats, [e.target.name]: value });
    };

    return (

        <div id="stats-data">

            <label>
                Total stats:
                <input required name="tot_stats" min={1} type="number" value={formDataStats.tot_stats} onChange={handleFormData} />
            </label>

            <label>
                Ps:
                <input required name="ps" min={1} type="number" value={formDataStats.ps} onChange={handleFormData} />
            </label>

            <label>
                Attack:
                <input required name="attack" min={1} type="number" value={formDataStats.attack} onChange={handleFormData} />
            </label>

            <label>
                Defense:
                <input required name="defense" min={1} type="number" value={formDataStats.defense} onChange={handleFormData} />
            </label>

            <label>
                Special Attack:
                <input required name="sp_attack" min={1} type="number" value={formDataStats.sp_attack} onChange={handleFormData} />
            </label>

            <label>
                Special Defense:
                <input required name="sp_defense" min={1} type="number" value={formDataStats.sp_defense} onChange={handleFormData} />
            </label>

            <label>
                Speed:
                <input required name="speed" min={1} type="number" value={formDataStats.speed} onChange={handleFormData} />
            </label>

        </div>

    );

};

export default CreateStats