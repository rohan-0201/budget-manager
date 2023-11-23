import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import pig from '/Users/sahana/Documents/college/WT/REACT/project copy/src/piggy.png';
import '/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles/logsign.css'
function Login(props)
{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email, pass})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                localStorage.setItem('email',email)
            navigate('/Home')}
        })
        .catch(err => console.log(err))
    }

    return(
        <> <div className='auth'>
            <h2>Login</h2>
             <img src={pig} alt='Logo'/>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor='email'>E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email here' id='email' name='email'/>
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder='Enter your password here' id='password' name='password'/>
                <button type='submit'>Log in</button>
            </form>
            <p className='para'>Don't have an account? 
            <button className="link-btn" onClick={() => navigate('/register')}>Sign Up here!</button></p>
            </div></>
    )
}

export default Login