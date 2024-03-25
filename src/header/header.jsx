import './header.css'
import logo from './public'
const Header = () => {
    return (
        
        <header className="meuHeader">
            <img src="{logo}" alt="catlogo" className='img-logo' />
            <nav>
                <a href="#"><li>Login</li></a>
                <a href="#"><li>Registrar</li></a>
            </nav>
        </header>
    )
}

export default Header;