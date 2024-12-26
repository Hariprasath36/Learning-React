import { useState } from "react";
function ChangeColour() {
    // let red="red";
    const [color, setColor]=useState("red")
    return <>
    <h1>CHange The color {color}</h1>
    <button onClick={() => {setColor("blue")}}>Change Color</button>
    </>
 
} 

export default ChangeColour