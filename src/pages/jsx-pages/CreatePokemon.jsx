import { use, useEffect, useState } from 'react';
import '../css-pages/CreatePokemon.css'
import axios from 'axios'

const formDataInit = {
    name: ``,
    height: 0,
    weight: 0,
    n_international: 0,
    generation: ``,
    description: ``,
    male: 0,
    female: 0,
    image: ``
};

const CreatePokemon = () => {

    const [formData, setFormData] = useState(formDataInit);

    const handleFormData = e => {
        
        let value = e.target.type === 'number' || e.target.type === 'select-one' ? Number(e.target.value) : e.target.value;

        return setFormData({...formData, [e.target.name]: value });

    };

    return (

        <form id='create-pokemon' onSubmit={e => (
            e.preventDefault(),
            setFormData(formDataInit),
            axios.post(`http://localhost:3000/pokemon`, formData)
                .then(res => console.log(res))
                .catch(err => console.error(err))
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

            {/* TODO: image file input */}
            <label>
                Choose the name of image file:
                <input required type="text" name='image' value={formData.image} onChange={handleFormData} placeholder='ex. charmander.png' />
            </label>

            <button type='submit'>Submit</button>

        </form>

    );

};

export default CreatePokemon