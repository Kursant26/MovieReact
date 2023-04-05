import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {Link, useParams} from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Search = ({el}) => {
    const [film, setFilm] = useState([])
    const {movieName} = useParams()

    const getFilm = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => setFilm(res.data.results))
    }

    useEffect(() => {
        getFilm(API_KEY)
    }, [movieName])
    console.log(film)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        film.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher