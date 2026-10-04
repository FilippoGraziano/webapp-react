import "../css-pages/ShellLayout.css"
import { NavLink, Outlet } from "react-router"

const ShellLayout = () => {

    return (

        <div id="shell-layout">

            <header>

                <nav>

                    <NavLink to='/' >Pokemon</NavLink>
                    <NavLink to='types' >Types</NavLink>
                    <NavLink to='moves' >Moves</NavLink>
                    <NavLink to='abilities' >Abilities</NavLink>
                    <NavLink to='createPokemon' >Add a Pokemon</NavLink>
                    
                </nav>

            </header>

            <main>

                <Outlet />
                
            </main>

        </div>
    )

}

export default ShellLayout