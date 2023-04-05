import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";

const Trailer = ({movieId}) => {
    const [video, setVideo] = useState([])

    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                setVideo(res.data.results)
            })
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [])
    console.log(video)

    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    {
                        video.map((el) => (
                            <div className="video--card">
                            <iframe width="342" height="230" src={`https://www.youtube.com/embed/${el.key}`}
                            title="from die for u to heatless ( sped up )" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;