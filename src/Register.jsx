import React from "react"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import pig from '/Users/sahana/Documents/college/WT/REACT/project copy/src/piggy.png';
import '/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles/logsign.css'
function Register(props)
{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',{name, email, pass})
        .then(result => {console.log(result)
            navigate('/login')})
        .catch(err => console.log(err))
    }

   

    return(
        <>
        <div className='auth'>
            <h2>Register Now</h2>
            <img src={pig} alt='Logo'/>
            <form className ='regForm' onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='Enter your fullname here' />
                <label htmlFor='email'>E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email here' id='email' name='email'/>
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder='Enter your password here' id='password' name='password'/>
                <button type='submit'>Log in</button>
            </form>
            <p className="para">Already have an account?
            <button  className="link-btn" onClick={() => navigate('/login')}>Login here!</button></p>
            </div> </>
    )
}

export default Register