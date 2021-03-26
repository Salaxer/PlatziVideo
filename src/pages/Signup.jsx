import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Forms.scss';


const Signup = () =>{
    return(
        <React.Fragment>
            <section className="Forms">
                <section className="Forms__container">
                <h2>Regístrate</h2>
                <form className="Forms__container--form">
                    <input className="input" type="text" placeholder="Nombre"/>
                    <input className="input" type="text" placeholder="Correo"/>
                    <input className="input" type="password" placeholder="Contraseña"/>
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Signup;