import React from "react";
import './script';
export default function(props){
    return(
        
        <div className={props.name}>
            <h2>{props.title}</h2>
                <input id="input" type='text' onChange={props.In}/>
        </div>
    )
}