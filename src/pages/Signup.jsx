import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Forms.scss';


const Signup = () =>{
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
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
                <h2>Regístrate</h2>
                <form className="Forms__container--form" onSubmit={handleSubmit}>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Nombre"
                        name="name"
                        onChange={handleInput}
                    />
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Correo"                        
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        className="input" 
                        type="password" 
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Signup;