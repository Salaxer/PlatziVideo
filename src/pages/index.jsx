import React from 'react';
import Search from '../components/Search'
import Carousel from '../components/Carousel'

const Index = () =>{
    return (
        <React.Fragment>
            <Search/>
            <Carousel title="Mi lista"/>
            <Carousel title="Tendencias"/>
            <Carousel title="Originales de PlatziVideo"/>
        </React.Fragment>
    )
}

export default Index;