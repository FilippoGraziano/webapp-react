import "../css-pages/ShellLayout.css"
import { NavLink, Outlet } from "react-router"

const ShellLayout = () => {

    return (

        <div id="shell-layout">

            <header>

                <nav>

                    <NavLink to='/' >Pokemon</NavLink>
                    <NavLink to='/pokemon/types' >Types</NavLink>
                    <NavLink to='/pokemon/moves' >Moves</NavLink>
                    <NavLink to='/pokemon/abilities' >Abilities</NavLink>
                    <NavLink to='/pokemon/createPokemon' >Add a Pokemon</NavLink>
                    
                </nav>

            </header>

            <main>

                <Outlet />
                
            </main>

        </div>
    )

}

export default ShellLayout