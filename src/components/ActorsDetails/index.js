import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../API/api";
import MovieVideo from "../MovieVideo";
import LOGOO from "../../img/user.png"

const ActorDetails = () => {
    const [actorDetails, setActorDetails] = useState({})
    const [bio, setBio] = useState(300)
    const {personId} = useParams()

    const getActorsDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=ru-US`)
            .then((res) => setActorDetails(res.data))
    }

    const more = (text) => {
        if (bio === 300) {
            setBio(text.length)
        } else {
            setBio(300)
        }
    }

    useEffect(() => {
        getActorsDetails(API_KEY)
    }, [])
    console.log(actorDetails)
    const {profile_path, name, place_of_birth, biography, birthday, also_known_as} = actorDetails
    return (
        <div id="actorDetails">
            <div className="container">
                <div className="actorDetails">
                    {profile_path ? <img className="actorDetails--img"
                                         src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`}
                                         alt=""/>
                        : <img className="actorDetails--img" src={LOGOO} width={300} alt=""/>}
                    <div className="actorDetails--info">
                        <h1>{name}</h1>
                        <h3>Дата рождения: {birthday}</h3>
                        <h3>Место рождения: {place_of_birth}</h3>
                        <h4>Также известность как:</h4>
                        <div className="actorDetails--info__about">
                            {
                                also_known_as?.map((el) => (
                                    <p style={{
                                        fontSize: "15px",
                                        margin: "5px 20px 30px 0"
                                    }}>{el}</p>
                                ))
                            }
                        </div>
                        <h5>Биография</h5>
                        <p>{biography?.slice(0, bio)}</p>
                        <h6 onClick={() => {
                            more(biography)
                        }}>{bio === 300 ? "Читать еще" : "Закрыть"}</h6>
                            <MovieVideo personId={personId}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;










// import {API_KEY} from "../../API/api";
// import user from "../../img/user.png"
//
//
// const Bio = () => {
//     const [bio, setBio] = useState({})
//
//     const getBio = (key) => {
//         axios(`https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US`)
//             .then((res) => {
//                 setBio(res.data)
//             })
//     }
//     useEffect(() => {
//         getBio(API_KEY)
//     }, [])
//     console.log(bio)
//
//     const {profile_path, name, biography} = bio
//     return (
//         <>
//             <div id="person">
//                 <div className="container">
//                     <div className="person">
//                         <div className="person--img">
//                             { profile_path ?  <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
//                                 : <img className="user" src={user} style={{
//                                 padding: "70px 0 ",
//                                 borderRadius: "5px 60px 5px 60px",
//                             }} alt=""/>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default Bio;