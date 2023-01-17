import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import WorkCard from "./WorkCard";

function sortTimes (objects) {
    return objects.sort((a, b) => {
        console.log(a)
        return JSON.parse(a).updated_at - JSON.parse(b).updated_at;
    });
};

import "./CurrentWork.css"

export default function CurrentWork () {

    const [works, setWorks] = useState(["Hi", "Billy", "Bob"])

    const header = {
        'auth': process.env.REACT_APP_GITHUB_AUTH,
    }

    axios.get('https://api.github.com/users/hampster2018/repos', header)
        .then((response) => {
            const array = sortTimes(response.data);
            console.log(array)
        });

    const Works = works.map((work, index) => 
        <WorkCard text={work} key={index}/>
    )

    return (
        <div className="Grid-Container">
            {Works}
        </div>
    );

}