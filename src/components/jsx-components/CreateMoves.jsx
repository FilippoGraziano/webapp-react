import { useEffect, useMemo, useState } from "react";
import axios from "axios"
import "../css-components/CreateMoves.css";

const CreateMoves = ({ formDataMoves, setFormDataMoves }) => {

    const { move_id, learning_gen, learning_level, learning_egg, learning_move_tutor, learning_mt, learning_mn } = formDataMoves;

    const [moves, setMoves] = useState([]);
    const [learningLevel, setLearningLevel] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3000/moves/`)
            .then(res => setMoves(res.data))
            .catch(err => console.error(err));
    }, []);

    const moveEffect = useMemo(() => {

        const filteredmove = moves.filter(ab => ab.id === move_id)[0];

        if (filteredmove !== undefined) return filteredmove.effect

        return;
    }, [move_id])

    const handleFormData = e => {
        const value = e.target.type === `select-one` || e.target.type === `number` ?
            Number(e.target.value) :
            e.target.type === `checkbox` ?
                e.target.checked :
                e.target.value;

        return setFormDataMoves({ ...formDataMoves, [e.target.name]: value });
    };

    return (

        <div id="moves-data">

            <h1>Add moves</h1>

            <select name="move_id" value={move_id} onChange={handleFormData} >
                <option value="">Choose the move</option>
                {moves !== undefined && moves.map(move => (

                    <option key={move.id} value={move.id}>{move.name}</option>

                ))}
            </select>
            {moveEffect !== undefined && <p>Effect: {moveEffect}  </p>}


            <select name="learning_gen" value={learning_gen} onChange={handleFormData}>
                <option value="">Choose a learning generation</option>
                <option value="1">1° generation</option>
                <option value="2">2° generation</option>
                <option value="3">3° generation</option>
                <option value="4">4° generation</option>
                <option value="5">5° generation</option>
                <option value="6">6° generation</option>
                <option value="7">7° generation</option>
                <option value="8">8° generation</option>
                <option value="9">9° generation</option>
            </select>

            <label>
                It learn the move by level?
                <input type="checkbox" checked={learningLevel} onChange={e => (setLearningLevel(!learningLevel), setFormDataMoves({...formDataMoves, learning_level: null}))} />
            </label>
            {learningLevel && <input name="learning_level" type="number" min={1} max={100} value={learning_level} onChange={handleFormData} />}

            <label>
                It learn the move from the egg?
                <input name="learning_egg" type="checkbox" checked={learning_egg} onChange={handleFormData} />
            </label>

            <label>
                It learn the move by move tutor?
                <input name="learning_move_tutor" type="checkbox" checked={learning_move_tutor} onChange={handleFormData} />
            </label>

            <label>
                It learn the move by MT?
                <input name="learning_mt" type="checkbox" checked={learning_mt} onChange={handleFormData} />
            </label>

            <label>
                It learn the move by MN?
                <input name="learning_mn" type="checkbox" checked={learning_mn} onChange={handleFormData} />
            </label>

            {/* TODO: add possibility to add more than one move */}

        </div>

    );

};

export default CreateMoves