import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css'
const Header = () =>{
    return (
        <header className="header">
            <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
            <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/ee">Cuenta</Link></li>
                <li><Link to="/we">Cerrar Sesión</Link></li>
            </ul>
            </div>
        </header>
    )
}

export default Header;