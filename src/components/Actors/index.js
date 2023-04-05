import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import logo from "../../img/user.png"
import Slider from "react-slick";
import {Link} from "react-router-dom";

const Actors = ({movieId}) => {
    const [actors, setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActors(res.data.cast)
            })
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log(actors)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div id="actors">
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => {
                                return(
                                    <Link to={`/person/person_details/${el.id}`}>
                                        <div className="actors--card">
                                            {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="img"/>
                                                :   <img src={logo} width={175} alt="img"/>}
                                            <h4>{el.name}</h4>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </Slider>


                </div>
            </div>
        </div>
    );
};

export default Actors;



// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US