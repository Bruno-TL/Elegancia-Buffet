import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/logo_EleganciaBuffet.png';
import './style.css';
import { useState } from 'react';
import Example from './Example';

export default function Headers() {

    return (
        <section className='section__Header'>
            
            <header className='header'>
                <Example />
                <nav className='headers__nav__links'>
                    <Link className='links' to='/'>Início</Link>
                    <Link className='links' to='/contato'>Contato</Link>
                </nav>
                <img src={logo} className="imgHeader" />
            </header>
            <main className='section__main'>
                <h1 className='section__main__titulo'>ELEGÂNCIA </h1>
                <h2 className='section__main__titulo2'>BUFFET</h2>
            </main>
        </section>

    )
}
