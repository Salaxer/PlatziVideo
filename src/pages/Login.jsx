import React, {useState} from 'react';
import './styles/Forms.scss';

import logoGoogle from '../assets/static/google-icon.png';
import LogoTwitter from '../assets/static/twitter-icon.png';
import { Link } from 'react-router-dom';

const Login = () =>{
    const [form, setValues] = useState({
        email: '',
    })
    const handleInput = e =>{
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(form);
    }
    return(
        <React.Fragment>
            <section className="Forms">
                <section className="Forms__container">
                    <h2>Inicia sesión</h2>
                    <form className="Forms__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="email"
                            className="input" 
                            type="email" 
                            placeholder="Correo"
                            onChange = {handleInput}
                        />
                        <input 
                            name="password"
                            className="input" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange = {handleInput}
                        />
                        <button className="button">Iniciar sesión</button>
                        <div className="Forms__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                        </label>
                        <Link to="/">Olvidé mi contraseña</Link>
                        </div>
                    </form>
                    <section className="Forms__container--social-media">
                        <div><img src={logoGoogle}/> Inicia sesión con Google</div>
                        <div><img src={LogoTwitter}/> Inicia sesión con Twitter</div>
                    </section>
                    <p className="Forms__container--register">No tienes ninguna cuenta <Link to="/signup">Regístrate</Link></p>
                </section>
            </section>
        </React.Fragment>
    );
}

export default Login;