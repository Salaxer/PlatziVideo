import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.scss'

const Footer = () =>{
    return (
        <React.Fragment>
            <footer className="footer">
                <Link to="/">Terminos de uso</Link>
                <Link to="/">Declaración de privacidad</Link>
                <Link to="/">Centro de ayuda</Link>
            </footer>
        </React.Fragment>
    )
}

export default Footer;