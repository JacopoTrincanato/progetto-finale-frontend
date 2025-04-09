import { NavLink } from 'react-router-dom'
export default function AppHeader() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand"><img src="https://static.vecteezy.com/system/resources/thumbnails/032/752/217/small/super-car-logo-icon-ai-generative-free-png.png" className='w-50' /></NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Cars</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}