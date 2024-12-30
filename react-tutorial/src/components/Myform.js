import React, {useState} from 'react'
function Myform() {
    // const[name,setName]=useState("");
    // const[age,setAge]=useState("");
    // const[email,setEmail]=useState("");
    // console.log('Current State',name);
    const[input,setInput]=useState({});

function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Current State',input);
    
}
    return (
        <form onSubmit={handleSubmit}>
            <label>First Name : <input type="text" placeholder="First Name" onChange={(e)=>{setInput((previousState) => {return {...previousState,firstName:e.target.value}})}} /></label><br/>
            <label>Age : <input type="text" placeholder="age" onChange={(e)=>{setInput((previousState) => {return {...previousState,age:e.target.value}})}} /></label><br/>
            <label>Email : <input type="text" placeholder="email" onChange={(e)=>{setInput((previousState) => {return {...previousState,email:e.target.value}})}} /></label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Myform