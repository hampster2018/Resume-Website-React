import React from "react";

import "./WorkCard.css"

export default function WorkCard (prop) {

    

    return (
        <div className="Card">
            {prop.text}
        </div>
    )

}