import React from "react"
import { useState } from "react"
import pic from './piggy.jpg'

function Register(props)
{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(pass);
    }

   
    return(
        
                <div className="auth">
                    <h2>Register Now</h2>
                    <img src={pic} alt='Logo'/>
                    <form className="regForm" onSubmit={handleSubmit}>
                        <label htmlFor='name'><p className="p1">Full Name</p></label>
                        <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='Enter your fullname here' />
                        <label htmlFor='email'><p className="p1">Email</p></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email here' id='email' name='email'/>
                        <label htmlFor='password'><p className="p1">Password</p></label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder='Enter your password here' id='password' name='password'/><br/>
                        <button type='submit'>Log in</button>
                    </form><br></br>
                    <p className="para">Already have an account?<button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Login here!</button></p>
                
            </div>
        
    )
}

export default Register