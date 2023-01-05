import { Link } from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa';
import logo from '../../assets/logo_EleganciaBuffet.png';
import './style.css';
import { useState } from 'react';

export default function Headers() {

    return (
        <header className='header'>
            <img src={logo} className="imgHeader" />
            <nav className='navbar nav__header'>
                
                <div className='dropdowns'>
                    <div className='dropdown'>
                        <Link className='links' to='/'>Início</Link>
                        <Link className='links' to='/contato'>Contato</Link>
                        <button>
                            Eventos <FaChevronDown/>
                        </button>
                        <div className='dropdown-menu'>
                            <div className='div__links__menu'>
                                <Link className='links__menu' to='/infantil'>Festa Infantil</Link >
                                <Link className='links__menu' to='casamento'>Casamento</Link >
                                <Link className='links__menu' to='debutante'>Debutante</Link >
                                <Link className='links__menu' to='outros'>Outros</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>


    )
}
