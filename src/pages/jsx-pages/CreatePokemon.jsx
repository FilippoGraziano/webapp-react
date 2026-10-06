import { use, useEffect, useState } from 'react';
import '../css-pages/CreatePokemon.css'

const formDataInit = {
    name: ``,
    height: 0,
    weight: 0,
    n_international: 0,
    generation: ``,
    description: ``,
    male: 0,
    female: 0,
    evolution_level: 0,
    evolution_stone: 0,
    evolution_trade: 0,
    trade_item : ``,
    evolution_friendship: 0
};

const CreatePokemon = () => {

    const [formData, setFormData] = useState(formDataInit);
    const [evolutionForm, setEvolutionForm] = useState({ chooseEvolution: ``, tradeCheck: false });

    const handleFormData = e => {
        
        let value = e.target.type === 'number' || e.target.type === 'select-one' ? Number(e.target.value) : e.target.value;

        if (e.target.name === `evolution_stone`) value = e.target.value;

        return setFormData({...formData, [e.target.name]: value });

    };

    useEffect(() => {

        if (evolutionForm.chooseEvolution === `trade`) {
            setFormData({...formData, evolution_trade: 1})
        } else setFormData({...formData, evolution_trade: 0})

        if (evolutionForm.chooseEvolution === `friendship`) {
            setFormData({...formData, evolution_friendship: 1})
        }

    }, [evolutionForm.chooseEvolution])

    console.log(`form data:` , formData, `form evolution:`, evolutionForm);

    return (

        <form id='create-pokemon' onSubmit={e => (

            e.preventDefault(),

            setFormData(formDataInit)

            )}>

            <label>
                Name:
                <input required type="text" name="name" value={formData.name} onChange={handleFormData}/>
            </label>

            <label>
                Height:
                <input required type="number" min={0.1} step={0.1} name="height" value={formData.height} onChange={handleFormData}/> m
            </label>

            <label name="weight">
                Weight:
                <input required type="number" min={0.1} step={0.1} name="weight" value={formData.weight} onChange={handleFormData}/> Kg
            </label>

            <label>
                International Pokedex:
                <input required type="number" min={1} name="n_international" value={formData.n_international} onChange={handleFormData}/>
            </label>

            <select required name="generation" value={formData.generation} onChange={handleFormData}>
                <option value="" disabled>Choose the pokemon generation</option>
                <option value="1">1° Generation</option>
                <option value="2">2° Generation</option>
                <option value="3">3° Generation</option>
                <option value="4">4° Generation</option>
                <option value="5">5° Generation</option>
                <option value="6">6° Generation</option>
                <option value="7">7° Generation</option>
                <option value="8">8° Generation</option>
                <option value="9">9° Generation</option>
            </select>

            <label>
                Pokemon description:
                <textarea name='description' value={formData.description} onChange={handleFormData}/>
            </label>

            <label>
                Male probability:
                <input required type="number" min={0} step={0.01} name="male" value={formData.male} onChange={handleFormData}/> %
            </label>

            <label name="female">
                Female probability:
                <input required type="number" min={0} step={0.01} name="female" value={formData.female} onChange={handleFormData}/> %
            </label>

            {/* TODO image file input */}

            <select required value={evolutionForm.chooseEvolution} onChange={e => setEvolutionForm({...evolutionForm , chooseEvolution: e.target.value})}>
                <option disabled value="">Choose an evolution method</option>
                <option value="level">Evolution by level</option>
                <option value="trade">Evolution by trade</option>
                <option value="stone">Evolution by stone</option>
                <option value="friendship">Evolution by friendship</option>
            </select>

            {evolutionForm.chooseEvolution === `level` && 
                <label>
                    Evolution level:
                    <input required type="number" min={1} name='evolution_level' value={formData.evolution_level} onChange={handleFormData} />
                </label>
            }

            {/* TODO: select with trade item */}

            {/* {evolutionForm.chooseEvolution === `trade` && 
                <label>
                    Trade item?
                    <input type="checkbox" value={evolutionForm.tradeCheck} onChange={e => {setEvolutionForm({...evolutionForm , tradeCheck: e.target.checked})}}/>
                </label>
            }
            {evolutionForm.tradeCheck === true &&
                <select required name="trade_item" value={formData.trade_item} onChange={handleFormData}>
                    <option disabled value="">Choose the item</option>
                </select> 
            } */}

            {evolutionForm.chooseEvolution === `stone` && 
                <select required name="evolution_stone" value={formData.evolution_stone} onChange={handleFormData} >
                    <option value="">Choose an evolution stone</option>
                    <option value="Fire Stone">Fire Stone</option>
                    <option value="Water Stone">Water Stone</option>
                    <option value="Thunder Stone">Thunder Stone</option>
                    <option value="Leaf Stone">Leaf Stone</option>
                    <option value="Moon Stone">Moon Stone</option>
                </select>
            }

            {/* TODO: select for the timing of evolution by frindship */}

            <button type='submit'>Submit</button>

        </form>

    );

};

export default CreatePokemon