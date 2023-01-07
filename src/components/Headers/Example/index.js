import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaHome, FaFortAwesomeAlt, FaChurch, FaGift, FaJediOrder } from 'react-icons/fa';


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
                    <Link className='links__menu' to='/' onClick={handleClose}>Início <FaHome/></Link> 
                    <Link className='links__menu' to='/infantil' onClick={handleClose}>Festa Infantil <FaGift/></Link >
                    <Link className='links__menu' to='/casamento' onClick={handleClose}>Casamento <FaChurch/></Link >
                    <Link className='links__menu' to='/debutante' onClick={handleClose}>Debutante <FaFortAwesomeAlt/></Link >
                    <Link className='links__menu ultimo__link' to='/outros' onClick={handleClose}>Outros <FaJediOrder/></Link >
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}