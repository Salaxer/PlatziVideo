import React, { useState } from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3001/initialState';

const Index = ({myList, trends, originals}) =>{
    // const [loading, setLoading] = useState(true);
    // const videos = useInitialState(API,setLoading);
    // if(loading){
    //     return <h3 className="categories__title">Cargando....</h3>
    // }

    return (
        <React.Fragment>
            <Search/>
            <Carousel list={myList} titleCarrousel="Mi lista"/>
            <Carousel list={trends} titleCarrousel="Tendencias"/>
            <Carousel list={originals} titleCarrousel="Originales de PlatziVideo"/>
        </React.Fragment>
    )
}
const mapStateToProps = (state) =>{
    return{
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
}
export default connect(mapStateToProps, null)(Index);