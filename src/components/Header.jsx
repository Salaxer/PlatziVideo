import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
// Todas las funciones que quiero recivir de mis actions
// Tengo que importarlas antes.
import {logoutRequest} from '../actions'

import gravatar from '../utils/gravatar';

import './styles/header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) =>{
    const {user} = props;
    const Icon = user.email ? gravatar(user.email) : userIcon;
    const handleLogout = () =>{
        props.logoutRequest({})
    }
    const headerClass = (useLocation().pathname === '/register' || useLocation().pathname === '/login') ? 'greenHeader' : '';
    return (
        <header className={`header ${headerClass}`}>
            <Link to="/"><img className="header__img" src={logo} alt="Platzi Video"/></Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                <img src={Icon} alt={user.email}/>
                <p>Perfil</p>
            </div>
            <ul>
                {
                    user.email ?
                    <li>{user.name}</li> :
                    null
                }
                {
                    user.email ? 
                    <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
                    :
                    <React.Fragment>
                        <li><Link to="/login">Inicia sesión</Link></li>
                        <li><Link to="/signup">Registrate</Link></li>
                    </React.Fragment>
                }
            </ul>
            </div>
        </header>
    )
}
// aqui recivo la informacion que quiero del estado
// en este casi estoy reciviendo todo lo que el usuario contiene
const mapStateToProps = state => {
    return{
        user: state.user
    }
}

// aqui recivo los props como funciones, pero ademas tengo que importarlas
// Para mandar cosas al estado necesito hacer que la funcion reciva cosas
const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);