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
    return (
        <form onSubmit={handleSubmit}>
            <label>First Name : <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} /></label><br/>
            <label>Age : <input type="text" name='age' placeholder="age" onChange={handleChange} /></label><br/>
            <label>Number : <input type="text" name='num' placeholder="number" onChange={handleChange} value={input.num} /></label><br/>
            <label>Email : <input type="text"  name='email' placeholder="email" onChange={handleChange} 
            value={input.email}/></label><br/>

            <select name="Country" onChange={handleChange} values={input.Country}>
                <option>Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="AUS">AUS</option>
                <option value="NZ">NZ</option>
                <option value="SA">SA</option>
                </select>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Myform;
s