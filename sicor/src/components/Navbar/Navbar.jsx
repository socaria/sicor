import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.PNG';
import './navbar.css';


const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={logo} alt='logo' />
            <div className="navbar__links-container">
                <a className="navbar-links" href='/inicio'>Inicio</a>
                <a className="navbar-links" href='/nosotros'>Nosotros</a>
                <a className="navbar-links" href='/servicios'>Servicios</a>
                <a className="navbar-links" href='/contacto'>Contacto</a>
            </div>

        </div>
    )
}

export default Navbar;

