import React from "react";

import "./WorkCard.css"

export default function WorkCard (prop) {

    return (
        <div className="CardDiv">
            {prop.text}
        </div>
    )

}