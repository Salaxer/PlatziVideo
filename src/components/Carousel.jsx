import React from 'react';
import CarouselItem from './CarouselItem'

import './styles/carousel.scss'


const Carousel = ({list,titleCarrousel}) =>{
    console.log(titleCarrousel);
    if(list.length == 0){
        return(
            <React.Fragment>
            <h3 className="categories__title">{titleCarrousel}</h3>
            <section className="carousel">
                <div className="carousel__container">
                    <h3 className="categories__title">Agrega videos para mostrarlos aqui</h3>
                </div>
            </section>
        </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <h3 className="categories__title">{titleCarrousel}</h3>
                <section className="carousel">
                    <div className="carousel__container">
                        {list.map((item) => {
                            return <CarouselItem 
                            key={item.id} 
                            {...item}
                        />
                        })}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Carousel;