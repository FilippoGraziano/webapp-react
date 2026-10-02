import './App.css';
import { Route, Routes } from 'react-router';
import ShellLayout from './pages/jsx-pages/ShellLayout.jsx';
import PokemonList from './pages/jsx-pages/PokemonList.jsx';
import Types from './pages/jsx-pages/Types.jsx';
import Moves from './pages/jsx-pages/Moves.jsx';
import Abilities from './pages/jsx-pages/Abilities.jsx';
import SinglePokemon from './pages/jsx-pages/SinglePokemon.jsx';

const App = () => {

  return (

    <Routes>

      <Route element={<ShellLayout />} >

        <Route path='/' element={<PokemonList />} />
        <Route path='/:name' element={<SinglePokemon />} />
        <Route path='types' element={<Types />} />
        <Route path='moves' element={<Moves />} />
        <Route path='abilities' element={<Abilities />} />

      </Route>

    </Routes>

  );

};

export default App;
