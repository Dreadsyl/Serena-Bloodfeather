import React from "react";
import Card from "./Card";
import serena from "../img/SerenaBloodfeather.png";
import template from "../img/CardTemplate.png";

function CardHolder(props) {
    return (
        <div className="container center-content">
            <div className="row center-content">
                <Card src={serena} alt="Serena Bloodfeather Card" attack={props.sAtk} health={props.sHel} left="att1" right="hel1" />
                <Card src={template} alt="Card Template" attack={props.eAtk} health={props.eHel} left="att2" right="hel2" />
            </div>
        </div>
    )
}

export default CardHolder;