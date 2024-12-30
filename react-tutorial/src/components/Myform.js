import React, {useState} from 'react'
function Myform() {
    const[name,setName]=useState("");
    // console.log('Current State',name);

function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Current State',name);
    
}
    return (
        <form onSubmit={handleSubmit}>
            <label>First Name : <input type="text" placeholder="First Name" onChange={(e)=>{setName(e.target.value)}} /></label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Myform