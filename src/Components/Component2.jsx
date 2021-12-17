import React from "react";
import Third from './Component3';

export default props =>
    <div className={props.name}>
        <h2>{props.title}</h2>
        <Third title='Componente 3' name='component3'/>
    </div>