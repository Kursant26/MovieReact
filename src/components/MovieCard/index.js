import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context/RootContext";

const MovieCard = ({el, id}) => {
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    return (
        <div key={el.id} className="popular--card" style={{
            background: dark === true ? "white" : "black"
        }}>
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
            </Link>
            <h2 style={{
                color: dark === true ? "black" : "white"
            }}>{el.title}</h2>

        </div>
    );
};

export default MovieCard;