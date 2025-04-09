import { NavLink } from 'react-router-dom'
export default function AppHeader() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg container d-flex justify-content-between align-items-center">

                <h1 className='text-white'>TJ cars</h1>

                <NavLink to='/' className="navbar-brand"><img src="https://static.vecteezy.com/system/resources/thumbnails/032/752/217/small/super-car-logo-icon-ai-generative-free-png.png" className='w-50' /></NavLink>

            </nav>
        </header>
    )
}