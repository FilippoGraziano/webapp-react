import './App.css';
import { Route, Routes } from 'react-router';
import ShellLayout from './pages/jsx-pages/ShellLayout.jsx';
import PokemonList from './pages/jsx-pages/PokemonList.jsx';
import Types from './pages/jsx-pages/Types.jsx';
import Moves from './pages/jsx-pages/Moves.jsx';
import Abilities from './pages/jsx-pages/Abilities.jsx';
import SinglePokemon from './pages/jsx-pages/SinglePokemon.jsx';
import CreatePokemon from './pages/jsx-pages/CreatePokemon.jsx';
import CreatePokemonDetails from './pages/jsx-pages/CreatePokemonDetails.jsx';

const App = () => {

  return (

    <Routes>

      <Route element={<ShellLayout />} >

        <Route path='/' element={<PokemonList />} />
        <Route path='/:name' element={<SinglePokemon />} />
        <Route path='/pokemon/:id' element={<CreatePokemonDetails />} />
        <Route path='/pokemon/types' element={<Types />} />
        <Route path='/pokemon/moves' element={<Moves />} />
        <Route path='/pokemon/abilities' element={<Abilities />} />
        <Route path='/pokemon/createPokemon' element={<CreatePokemon />} />
        
      </Route>

    </Routes>

  );

};

export default App;
