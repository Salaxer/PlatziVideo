import React from 'react';
import {connect} from 'react-redux'
import {setFavorite, deleteFavorite} from '../actions';

import './styles/CarouselItem.scss'

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) =>{
    const {titleMain,id,cover,title,year,duration,contentRating} = props;
    const handleSetFavorite = () =>{
        props.setFavorite({
                id,cover,title,year,duration,contentRating
        })
    }
    const handleDeleteFavorite = (ItemId) =>{
        props.deleteFavorite(ItemId)
    }
    return(
        <React.Fragment>
            <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt={title}  />
                <div className="carousel-item__details">
                    <div>
                        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
                        {titleMain === "Mi lista" ?
                            <img 
                                className="carousel-item__details--img" 
                                src={removeIcon} 
                                alt="Plus Icon"
                                onClick = {() => handleDeleteFavorite(id)}
                            />:
                            <img 
                                className="carousel-item__details--img" 
                                src={plusIcon} 
                                alt="Plus Icon"
                                onClick = {handleSetFavorite}
                            /> 
                        }
                    </div>
                    <p className="carousel-item__details--title">{title}</p>
                    <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} minutos`} </p>
                </div>
            </div>
        </React.Fragment>
    )
}
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);