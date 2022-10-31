import React, { useState } from "react";
import WorkCard from "./WorkCard";

import "./CurrentWork.css"

export default function CurrentWork () {

    const [works, setWorks] = useState(["Hi", "Billy", "Bob"])

    const Works = works.map((work, index) => 
        <WorkCard text={work} key={index}/>
    )

    return (
        <div className="Grid-Container">
            {Works}
        </div>
    );

}