import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../components/MovieCard";
import {LanguageContext} from "../context/RootContext";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    // const {setDark} = useContext(LanguageContext)
    console.log(dark)
    console.log(language)

    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => {
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }

useEffect(() => {
    getPopular(API_KEY)
},     [page, language])

    return (
        <div id="popular" style={{
            background: dark === true ? "white" : "black",
            transition: ".4s"
        }}>
            <div className="container">
                <h1 style={{
                    color: dark === true ? "black" : "white",
                    transition: ".4s"
                }}>Popular</h1>
                <div className="popular">
                    {
                        popular.map((el) => {
                            return (
                                <MovieCard el={el}/>
                            )
                        })
                    }
                </div>
                <div className="popular--page">
                    <button onClick={() => {setPage(page - 1)}}>prev</button>
                    <h2 style={{
                        color: dark === true ? "black" : "white",
                        transition: ".4s"
                    }}>{page}{page ? page === -0 : setPage(1)}</h2>
                    <button onClick={() => setPage(page + 1)}>next</button>
                </div>
            </div>
        </div>
    );
};

export default Popular;