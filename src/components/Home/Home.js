import React from "react";
import Bio from "./Bio";

import Headshot from "../Assets/Headshot.PNG"

import "./Home.css"

export default function Home () {

    return (
    <div className="Home">
        <img src={Headshot} alt="Headshot" className="Headshot"/>
        <Bio/>
    </div>
    );

}