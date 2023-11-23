import React from 'react'
import { useState } from 'react'
import '/Users/sahana/Documents/college/WT/REACT/project/src/Components/pages.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function AddFriends(props){
    
    const[name,setName]=useState('');
    const[amount,setAmount]=useState('');
    const [dateTime, setDateTime] = useState(() => new Date().toLocaleString());


    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }


    return(
        <div className='pages'>
       
            <form onSubmit={handleSubmit}>
            <h1 className='heading'>Add Friend</h1>
            <label htmlFor='name'>Full Name</label>
                <input value={name} 
                onChange={(e) => setName(e.target.value)} 
                name='name' id='name' placeholder='Enter your fullname here' /><br/>

                <label htmlFor='amount'>Amount</label>
                <input value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                type='number' placeholder='Enter amount' id='amount' name='amount'/><br/>

                <label>Date and Time:</label>
                <input type="text" value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}  readOnly /><br/>
                <button type='submit'>Split</button>
            </form>
            
        </div>
    )
}
export default AddFriends