import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
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
    return (
        <header className="header">
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
const mapStateToProps = state => {
    return{
        user: state.user
    }
}
const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);