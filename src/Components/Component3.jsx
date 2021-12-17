import React from "react";
import './Component2';
import './Component1';

export default props =>
    <div className={props.name}>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
    </div>