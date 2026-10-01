import { NavLink, Outlet } from "react-router"

const ShellLayout = () => {

    return (

        <>

            <header>

                <nav>

                    <NavLink to='/' >Pokemon</NavLink>
                    <NavLink to='types' >Tipi</NavLink>
                    <NavLink to='moves' >Mosse</NavLink>
                    <NavLink to='abilities' >Abilità</NavLink>
                    
                </nav>

            </header>

            <main>

                <Outlet />
                
            </main>

        </>
    )

}

export default ShellLayout