import React from "react"
import { useState } from "react"

function Register(props)
{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

   

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor>Full Name</label>
                <input value={name} name='name' id='name' placeholder='Enter your fullname here' />
                <label htmlFor='email'>E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email here' id='email' name='email'/><br/>
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder='Enter your password here' id='password' name='password'/><br/>
                <button type='submit'>Log in</button>
            </form>
            <button onClick={() => props.onFormSwitch('Login')}>Login here</button>
        </>
    )
}

export default Register