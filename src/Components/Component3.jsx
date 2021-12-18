import React from "react";
const Component3 = props =>{
    return(
        <div className={props.name}>
            <h3>{props.title}</h3>
            <h4>{props.value}</h4>
        </div>
    ) 
}
export default Component3;