import React from 'react';
import Header from './Header';
import Footer from '../components/Footer';
function Layout(props) {
    // const children = props
    return(
        <React.Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>
        )
}

export default Layout