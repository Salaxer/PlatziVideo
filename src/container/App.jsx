import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Notfound from '../components/Notfound'
import Index from '../pages/index'

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route component={Notfound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;