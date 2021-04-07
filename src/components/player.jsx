import React, {useLayoutEffect} from 'react';
import { connect } from 'react-redux';
import {getVideoSource} from '../actions';
import NotFound from './Notfound';

import './styles/player.scss';

const Player = (props) =>{
    const {id} = props.match.params;
    useLayoutEffect(() => {
        props.getVideoSource(id);
      }, []);
    const hasPlayin = Object.keys(props.playing).length > 0;
    // Con objects.keys lo que obtenemos son la cantidad de elementos que podemos encontrar dentro de un objeto
    return hasPlayin?(
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>Regresar {id}</button>
                {/* con goBack le digo que me regrese a la pagina anterior */}
            </div>
        </div>
    ):
    <NotFound/>
    ;
}
const mapStateToProps = state => {
    return{
        playing: state.playing,
    }
}
const mapDispatchToProps = {
    getVideoSource,
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);