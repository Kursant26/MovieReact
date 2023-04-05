import React, {useContext} from 'react';
import {LanguageContext} from "../../context/RootContext";

const Footer = () => {
    const {dark} = useContext(LanguageContext)
    return (
        <div id="footer" style={{
            background: dark === true ? "white" : "black",
            borderTop: dark === true ? "1px solid black" : "1px solid white",
            transition: ".4s"
        }}>
            <div className="container">
                <div className="footer">
                    <h3 style={{
                        color: dark === true ? "black" : "white",
                        transition: ".4s"
                    }}>Front-end Develop Group</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;