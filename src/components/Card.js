import React from "react";

function Card(props) {
    return (
        <div className="col">
            <div className={props.left}>{props.attack}</div>
            <img src={props.src} alt={props.alt} />
            <div className={props.right}>{props.health}</div>
        </div>
    )
}

export default Card;