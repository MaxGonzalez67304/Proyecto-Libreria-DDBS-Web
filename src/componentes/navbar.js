import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registro from '../paginas/registro';
import Libros from '../paginas/libros';
import Usuarios from '../paginas/usuarios';
import Sucursales from '../paginas/sucursales';

import CustomCarousel from './carousel.js';

function CustomNavbar() {
    const [showRegistro, setShowRegistro] = useState(false);
    const [showLibros, setShowLibros] = useState(false);
    const [showUsuarios, setShowUsuarios] = useState(false);
    const [showSucursales, setShowSucursales] = useState(false);
    const [showCarousel, setShowCarousel] = useState(true);


    const handleRegistroClick = () => {
        setShowRegistro(true);
        setShowLibros(false);
        setShowUsuarios(false);
        setShowSucursales(false);
        setShowCarousel(false);
    };

    const handleLibrosClick = () => {
        setShowRegistro(false);
        setShowLibros(true);
        setShowUsuarios(false);
        setShowSucursales(false);
        setShowCarousel(false);
    };


    const handleNavItemClick = () => {
        setShowRegistro(false);
        setShowLibros(false);
        setShowUsuarios(false);
        setShowSucursales(false);
        setShowCarousel(true);
    };

    const handleUsuariosClick = () => {
        setShowRegistro(false);
        setShowLibros(false);
        setShowUsuarios(true);
        setShowSucursales(false);
        setShowCarousel(false);
    };

    const handleSucursalesClick = () => {
        setShowRegistro(false);
        setShowLibros(false);
        setShowUsuarios(false);
        setShowSucursales(true);
        setShowCarousel(false);
    };

    return (
        <div>
            <Navbar>
            <Nav.Link onClick={handleNavItemClick} href=""><Navbar.Brand href="">Biblioteca</Navbar.Brand></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={handleLibrosClick} href="">Libros</Nav.Link>
                        <Nav.Link onClick={handleUsuariosClick} href="">Usuarios</Nav.Link>
                        <Nav.Link onClick={handleRegistroClick}>Registro</Nav.Link>
                        <Nav.Link onClick={handleSucursalesClick} href="">Sucursales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {showRegistro && <Registro />}
            {showLibros && <Libros />}
            {showUsuarios && <Usuarios />}
            {showSucursales && <Sucursales />}
            {showCarousel && <CustomCarousel />}
        </div>
    );
}

export default CustomNavbar;
