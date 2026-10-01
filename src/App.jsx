import './App.css';
import { Route, Routes } from 'react-router';
import ShellLayout from './pages/jsx-pages/ShellLayout.jsx';
import Pokemon from './pages/jsx-pages/Pokemon.jsx';
import Types from './pages/jsx-pages/Types.jsx';
import Moves from './pages/jsx-pages/Moves.jsx';
import Abilities from './pages/jsx-pages/Abilities.jsx';

const App = () => {

  return (

    <Routes>

      <Route element={<ShellLayout />} >

        <Route index element={<Pokemon />} />
        <Route path='types' element={<Types />} />
        <Route path='moves' element={<Moves />} />
        <Route path='abilities' element={<Abilities />} />

      </Route>

    </Routes>

  );

};

export default App;
