import React, {useState} from 'react'
function Myform() {
    const[name,setName]=useState("");
    console.log('Current State',name);
    return (
        <form>
            <label>First Name : <input type="text" placeholder="First Name" onChange={(e)=>{setName(e.target.value)}} /></label>
        </form>
    )
}

export default Myform