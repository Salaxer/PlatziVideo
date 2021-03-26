import React, { useState } from 'react';
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3001/initialState';

const Index = () =>{
    const [loading, setLoading] = useState(true);
    const videos = useInitialState(API,setLoading);
    

    if(loading){
        return <h3 className="categories__title">Cargando....</h3>
    }
    return (
        <React.Fragment>
            <Search/>
            <Carousel list={videos.mylist} titleCarrousel="Mi lista"/>
            <Carousel list={videos.trends} titleCarrousel="Tendencias"/>
            <Carousel list={videos.originals} titleCarrousel="Originales de PlatziVideo"/>
        </React.Fragment>
    )
}

export default Index;