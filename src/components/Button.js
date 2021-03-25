import React from "react";

function Button(props){
    return (
        <div className="container">
            <h2>Enemy stats</h2>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Attack</span>
                </div>
                <input className="form-control" type="number" name="attack" onChange={props.userAttack} id="v1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Life</span>
                </div>
                <input className="form-control" type="number" name="health" onChange={props.userHealth} id="v2" />
            </div>
            <div className="row">
                <button className="btn btn-color btn-lg col" id="btn" onClick={props.doTheMath}>Do The Math!!!</button>
                <button className="btn btn-color btn-lg col" onClick={props.reset}>Reset values</button>
            </div>
        </div>
    )
}

export default Button;