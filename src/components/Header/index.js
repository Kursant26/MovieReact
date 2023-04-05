import React, {useContext, useState} from 'react';
import logo from '../../img/logo.png'
import {NavLink, useNavigate} from "react-router-dom";
// import {LanguageContext} from "../../context/RootContext";
import {LanguageContext} from "../../context/RootContext";
import {MdNightsStay} from "react-icons/md";
import {CiLight} from "react-icons/ci";
// import {dark} = useContext(LanguageContext)

const Header = () => {
    const [search, setSearch] = useState("")
    const {setLanguage} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const nav = useNavigate()
    const {dark} = useContext(LanguageContext)
    return (
        <div id="header" style={{
            background: dark === true ? "white" : "black",
            borderBottom: dark === true ? "1px solid black" : "1px solid white",
            transition: ".4s"
        }}>
            <div className="container">
                <div className="header">
                    <img src={logo} width={100} alt="img"/>
                    <div className="header--nav">
                        <NavLink to={"/"} style={{
                            color: dark === true ? "black" : "white",
                            transition: ".4s"
                        }} className="header--nav__link">Home</NavLink>
                        <NavLink to={"/popular"} style={{
                            color: dark === true ? "black" : "white",
                            transition: ".4s"
                        }} className="header--nav__link">Popular</NavLink>
                        <NavLink to={"/top_rated"} style={{
                            color: dark === true ? "black" : "white",
                            transition: ".4s"
                        }} className="header--nav__link">Top Radet</NavLink>
                    </div>
                    <select style={{
                        border: "2px solid red"
                    }} onChange={(e) => {
                        setLanguage(e.target.value)
                    }}>
                        <option value="en-US">Английский</option>
                        <option value="ru-RU">Русский</option>
                        <option value="fr-FR">Франц</option>
                    </select>
                    <div className="header--dark">
                        <button onClick={() => setDark(true)} style={{
                            background: dark === true ? "black" : "white",
                            color: dark === true ? "white" : "black",
                            transition: ".4s"
                        }} className="header--dark__btn1"><CiLight/></button>
                        <button  onClick={() => setDark(false)} style={{
                            background: dark === true ? "black" : "white",
                            color: dark === true ? "white" : "black",
                            transition: ".4s"
                        }} className="header--dark__btn2"><MdNightsStay/></button>
                    </div>
                    <div className="header--btn">
                        <input type="text" onChange={(e) => {
                            setSearch(e.target.value)
                        }} style={{
                            border: "2px solid red"
                            // background: dark === true ? "black" : "white",
                        }}/>
                        <button
                            onClick={() => nav(`search/search_movie/${search}`)}
                        >Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;