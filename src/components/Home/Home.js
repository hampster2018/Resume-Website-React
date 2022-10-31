import React from "react";

import Headshot from "../Assets/Headshot.PNG"

import "./Home.css"

export default function Home () {

    return (
    <div className="Home">
        <img src={Headshot} alt="Headshot" className="Headshot"/>
        <div>Hi</div>
    </div>
    );

}