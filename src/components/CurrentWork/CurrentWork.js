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

    const [works, setWorks] = useState(null)
    const [repos, setRepos] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const params = {
        'auth': process.env.REACT_APP_GITHUB_AUTH,
    };

    async function fetchRepos() {
        await axios.get('https://api.github.com/users/hampster2018/repos?sort=updated', {params: params})
            .then((response) => {
                console.log(response)
                setRepos(response.data);
                setLoaded(true);    
            })
    }

    }

    function makeWorkCards () {
        console.log()
        setWorks(repos.map((repos, index) =>
            <WorkCard text={repos.name} key={index} data={repos}/>
        ))
    }

    useEffect(() => {
        console.log("running")
        if (!loaded) {
            fetchRepos();
        }
        makeWorkCards();

    }, [loaded]);

    if (!loaded) {
        return (
            <div className="Grid-Container">
                Loading...
            </div>
        )
    }

    return (
        <div className="Grid-Container">
            {works}
        </div>
    );

}