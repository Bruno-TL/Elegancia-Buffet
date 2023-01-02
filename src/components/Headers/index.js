import { Link } from 'react-router-dom';
import logo from '../../assets/logo_EleganciaBuffet.png';
import './style.css';

export default function Headers() {
    return (
        <header className='header'>
            <img src={logo} className="imgHeader"/>
            <nav className='nav__header'>
                <Link to='/'>Início</Link>
                <Link>Festas</Link>
                <Link to='/contato'>Contato</Link>
            </nav>
        </header>
    )
}