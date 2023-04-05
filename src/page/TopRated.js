import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../components/MovieCard";
import {LanguageContext} from "../context/RootContext";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [active, setActive] = useState(1)
    // const array = [1,2,3,4,5,6,7,8,9,10]

    const {dark} = useContext(LanguageContext)
    const getTopRated = (key) => {
        // window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-US&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }

    useEffect(() => {
        getTopRated(API_KEY)
    },     [active])

    return (
        <div id="topRated" style={{
            background: dark === true ? "white" : "black",
            transition: ".4s"
        }}>
            <div className="container">
                <h1>Top Rated</h1>
                <div className="topRated">
                    {
                        topRated.map((el) => {
                            return (
                               <MovieCard el={el}/>
                            )
                        })
                    }
                </div>
                <div className="topRated--btn">
                    <button onClick={() => {setActive(active - 1)}}>prev</button>
                    <h2 style={{
                        color: dark === true ? "black" : "white",
                        transition: ".4s"
                    }}>{active}{active ? active === -0 : setActive(1)}</h2>
                    {/*<h2>Page:{activ}{activ ? activ === -0 : setActiv(1)}</h2>*/}
                    <button onClick={() => setActive(active + 1)}>next</button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;