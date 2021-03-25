import React from 'react';
import CarouselItem from './CarouselItem'

import './styles/carousel.scss'


const Carousel = ({title}) =>{

    return (
        <React.Fragment>
            <h3 className="categories__title">{title}</h3>
            <section className="carousel">
                <div className="carousel__container">
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Carousel;