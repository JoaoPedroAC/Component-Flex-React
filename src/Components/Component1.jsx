import React from "react";
import './script'
export default function(props){
    return(
        <div className={props.name}>
            <h3>{props.title}</h3>
                <input id="input" type='text' onChange={props.In}/>

            <div>
                <p>oi:{props.In}</p>
            </div>
        </div>
    )
}