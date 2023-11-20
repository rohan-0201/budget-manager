import React from 'react'
import { useState } from 'react'
import './Login.css'
import pic from './piggy.jpg'

function Login(props)
{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }
    
    return(
        <div classnName='auth'>
            
            <h2>Login</h2>
            <img src={pic} alt='Logo'/>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor='email'><p className='p1'>E-mail</p></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email here' id='email' name='email'/>
                <label htmlFor='password'><p className='p1'>Password</p></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder='Enter your password here' id='password' name='password'/><br/>
                <button type='submit'>Log in</button>
            </form><br></br>
            <p className='para'>Don't have an account?<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here!</button></p>
        </div>
    )
}

export default Login