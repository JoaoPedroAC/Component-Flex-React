import React from "react";
import ComponetFirst from './Component1';
import ComponetThird from './Component3';
const inputString = document.getElementById('input');

export default  function Writing(){
    const input =()=>{
        return inputString.value;
    }
    return (
        <ComponetFirst In={input}/>,
        <ComponetThird subtitle={input}/>
    )
}