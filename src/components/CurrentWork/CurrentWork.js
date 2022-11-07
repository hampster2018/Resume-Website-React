import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import WorkCard from "./WorkCard";


import "./CurrentWork.css"

export default function CurrentWork () {

    const [works, setWorks] = useState(["Hi", "Billy", "Bob"])

    const header = {
        'auth': process.env.REACT_APP_GITHUB_AUTH,
    }

    axios.get('https://api.github.com/repos/hampster2018/SoftwareEngineeringProject', header)
        .then((response) => console.log(response.data));

    const Works = works.map((work, index) => 
        <WorkCard text={work} key={index}/>
    )

    return (
        <div className="Grid-Container">
            {Works}
        </div>
    );

}