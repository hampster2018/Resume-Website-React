import React from "react";
import { 
    Link
} from "react-router-dom";
import "./Navbar.css";

function RouteSelect (prop) {
    
    return (
        <div className={prop.divStyle}>
            <button className={prop.buttonStyle ? undefined : "LinkButton"}>
                <Link to={prop.to}>
                    {prop.value}
                </Link>
            </button>
        </div>
    );

}

export default function Navbar () {

    return (
    <>
        <div className="Navbar">
            <RouteSelect buttonStyle="TitleButton" value="Eric Shields" to="/"/>
            <RouteSelect divStyle="SecondLink" value="about" to="/about"/>
            <RouteSelect divStyle="Link" value="interest" to="/interest"/>
            <RouteSelect divStyle="Link" value="Current Work" to="/currentWork"/>
            <RouteSelect divStyle="Link" value="Contact Me" to="/contact"/>
        </div>
    </>
    );

}

