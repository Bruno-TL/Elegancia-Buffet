import { Link } from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa';
import logo from '../../assets/logo_EleganciaBuffet.png';
import './style.css';

export default function Headers() {
    const toggleMenu = () => {
        document.body.classList.toggle("open");
    }
    return (
        <header className='header'>
            <img src={logo} className="imgHeader" />
            <nav className='navbar nav__header'>
                <button onClick={toggleMenu()} className='burger'></button>
                <div className='dropdowns'>
                    <div className='dropdown'>
                        <Link className='links' to='/'>Início</Link>
                        <Link className='links' to='/contato'>Contato</Link>
                        <button>
                            Festas <FaChevronDown/>
                        </button>
                        <div className='dropdown-menu'>
                            <div className='div__links__menu'>
                                <Link className='links__menu'>Festa Infantil</Link >
                                <Link className='links__menu'>Casamento</Link >
                                <Link className='links__menu'>Debutante</Link >
                                <Link className='links__menu'>Outros</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>


    )
}
