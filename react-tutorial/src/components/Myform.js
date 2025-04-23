import React, {useState} from 'react'
function Myform() {
    // const[name,setName]=useState("");
    // const[age,setAge]=useState("");
    // const[email,setEmail]=useState("");
    // console.log('Current State',name);
    const[input,setInput]=useState({num:'+91'});

function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Current State',input);
    
}

function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((previousState) => {
        return {
            ...previousState,
            [name]: value}
    })
}
   