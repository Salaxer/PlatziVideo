import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Notfound from '../components/Notfound'
import Index from '../pages/index'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route component={Notfound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;