import React from "react"
import troll from "../images/troll.png"

export default function Header(){
    return(
        <div className="header--main">
            <div className="header--logo">
                <img className="header-img" src={troll} alt="applogo" />
                <h3 className="header-title">MemeGenerator</h3>
            </div>
            <p className="header-data">React Course - Project 3</p>
        </div>
    )
}