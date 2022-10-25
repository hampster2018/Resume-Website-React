import React from "react";
import { 
    Link
} from "react-router-dom";

function RouteSelect (prop) {
    
    return (
        <button>
            <Link to={prop.to}>
                {prop.value}
            </Link>
        </button>
    );

}

export default function Navbar () {

    return (
    <>
        <div>
            <RouteSelect classname="Title" value="Eric Shields" to="/"/>
            <RouteSelect classname="Route" value="about" to="/about"/>
            <RouteSelect classname="Route" value="interest" to="/interest"/>
            <RouteSelect classname="Route" value="Current Work" to="/currentWork"/>
            <RouteSelect classname="Route" value="Contact Me" to="/contact"/>
        </div>
    </>
    );

}

