import React, {useState, useMemo} from 'react';
import { connect } from 'react-redux';
import CarouselItem from './CarouselItem';

import './styles/Search.scss'
const Search = (props) =>{
    const [result, setResult] = useState({});
    const [search, setSearch] = useState({search: ''});
    const handleSearch = e =>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    useMemo(() =>{
        setResult(props.trends.concat(props.originals).filter(item =>{
            return item.title.toLowerCase().includes(search.search.toLowerCase());
        }))
    },[search])
    return(
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input 
            name="search"
            onChange={handleSearch} 
            type="text" 
            className="input" 
            placeholder="Buscar..."/>
        <div className="main-search">
            <div className="carousel__container">
                {!search.search ? 
                ''
                :
                    result.map((item) => {
                        return <CarouselItem
                                    key={item.id}
                                    {...item}
                                />
                    })
                }
            </div>
        </div>
    </section>
    )
}
const mapStateToProps = (state) =>{
    return{
        trends: state.trends,
        originals: state.originals,
    };
}
export default connect(mapStateToProps,null)(Search);