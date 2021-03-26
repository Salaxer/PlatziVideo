import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Forms.scss';


const Signup = () =>{
    return(
        <React.Fragment>
            <section class="Forms">
                <section class="Forms__container">
                <h2>Regístrate</h2>
                <form class="Forms__container--form">
                    <input class="input" type="text" placeholder="Nombre"/>
                    <input class="input" type="text" placeholder="Correo"/>
                    <input class="input" type="password" placeholder="Contraseña"/>
                    <button class="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Signup;