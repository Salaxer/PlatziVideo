import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App'

import './assets/global.scss'

const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);


// Malas
// ¿Para qué nos sirve el archivo .gitignore de nuestro proyecto?
// Especifica documentos que no deben de ser rastreados o debe agregar o se deben ignorar en GIT. Mal :(
// ¿Cómo ejecutamos nuestra Fake API?
// npm run json-server file.json
// ¿Para qué nos sirve useEffect()?
// useEffect, agrega la capacidad de utilizar estados desde un componente tipo Clase. Ejemplo: Llamar una API.
// ¿Cuál de los siguientes componentes es un componente de tipo clase?
// constructor(props){ super(props); this.state = { hello: ‘Hola Mundo Stateful’ } } render(){ return ( <h1>{this.state.hello}</h1> ); } } export default Stateful; import React {Component}from react;
