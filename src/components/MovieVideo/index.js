import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";

const MovieVideo = ({personId}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movieVideo, setMovieVideo] = useState([])


    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setMovieVideo(res.data.cast)
            })

    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getVideo(API_KEY)
    }, [])

    return (
        <div id="movieVideo">
                <div className="movieVideo">
                    {
                        movieVideo.map((el) => {
                            return(
                                <div className="movieVideo--card">
                                    <Link to={`/movie/movie_details/${el.id}`}>

                                        {el.poster_path ? <img
                                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                                width={140} alt=""/>
                                            : <img
                                                src={`https://media.istockphoto.com/id/954629650/vector/play-video-icon-movie-icon-video-player-symbol.jpg?s=612x612&w=0&k=20&c=aw0pBpq2uU9gc-TrKvpVxSc8Bi7jfmDQPWGCzL2EvRM=`}
                                                width={214} alt=""/>
                                        }                                    </Link>
                                    <h4>{el.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    );
};

export default MovieVideo;