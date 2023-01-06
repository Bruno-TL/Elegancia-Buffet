import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';


import './style.css';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='button__nav' onClick={handleShow}>
                <FaBars className='row__nav' />
            </button>


            <Offcanvas show={show} onHide={handleClose} id='nav__menu'>
                <Offcanvas.Body className='nav_links__menu'>
                    <h1 className='titulo__link'>EVENTOS</h1>
                    <Link className='links__menu' to='/' onClick={handleClose}>Início</Link> 
                    <Link className='links__menu' to='/infantil' onClick={handleClose}>Festa Infantil</Link >
                    <Link className='links__menu' to='/casamento' onClick={handleClose}>Casamento</Link >
                    <Link className='links__menu' to='/debutante' onClick={handleClose}>Debutante</Link >
                    <Link className='links__menu' to='/outros' onClick={handleClose}>Outros</Link >
                    
                    <Link className='links__menu' to='/contato' onClick={handleClose}>Contato</Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}