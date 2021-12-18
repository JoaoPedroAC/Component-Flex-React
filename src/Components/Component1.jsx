import React from "react";
// import ComponetThird from './Component3';
export default function(props){
    return(
        <div className={props.name}>
            <h2>{props.title}</h2>
                <input value={props.inputValue} id="input" type='text' onChange={(e)=>{
                    props.inputSet(e.target.value);
                }}/>
        </div>
    )
}