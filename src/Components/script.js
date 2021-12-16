import React from "react";
import Componet from './Component1'
const inputString = document.getElementById('input');
export default  function Writing(){
    const input =()=>{
        const w = inputString.value;
        return console.log(w);
    }
    return <Componet In={input}/>
}