import React from 'react';
import CarouselItem from './CarouselItem'

import './styles/carousel.scss'


const Carousel = ({list,titleCarrousel}) =>{
    if(list.length == 0){
        return(
            <React.Fragment>
            <h3 className="categories__title">{titleCarrousel}</h3>
            <section className="carousel">
                <div className="carousel__container">
                    <h3 className="categories__title">No hay videos disponibles</h3>
                </div>
            </section>
        </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <h3 className="categories__title">{titleCarrousel}</h3>
            <section className="carousel">
                <div className="carousel__container">
                    {list.map((item) => {
                        return <CarouselItem
                        key={item.id}
                        {...item}
                        titleMain = {titleCarrousel}
                    />
                    })}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Carousel;