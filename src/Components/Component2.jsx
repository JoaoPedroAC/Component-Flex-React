import React from "react";

export default props =>
    <div className={props.name}>
        <h2>{props.title}</h2>
        {props.children}
    </div>