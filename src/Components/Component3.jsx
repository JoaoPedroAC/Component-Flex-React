import React from "react";
export default props =>
    <div className={props.name}>
        <h3>{props.title}</h3>
        <h4>{props.value}</h4>
    </div>