import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/header.scss';

import gravatar from '../utils/gravatar';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) =>{
    const {user} = props;
    const Icon = user.email ? gravatar(user.email) : userIcon;
    return (
        <header className="header">
            <Link to="/"><img className="header__img" src={logo} alt="Platzi Video"/></Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                <img src={Icon} alt={user.email}/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/login">Inicia sesión</Link></li>
                <li><Link to="/signup">Registrate</Link></li>
            </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header);