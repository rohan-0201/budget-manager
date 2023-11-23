import React from 'react'
import { useState } from 'react'
import '/Users/sahana/Documents/college/WT/REACT/project/src/Components/pages.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles/logsign.css'

function EditBudget(props){
    const[amount,setAmount]=useState('');
    const email = localStorage.getItem('email');
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:3001/api/users/${email}/budget`,{amount})
        .then(result => {console.log(result)
            if(result.data === "Success"){
            navigate('/Budget')}
        })
        .catch(err => console.log(err))
        
    }


    return(
        <div className='auth'>
      
       
            <form className="addbudget" onSubmit={handleSubmit}>
            <h1 className='heading'>Edit Monthly Budget Goal</h1>
                <label htmlFor='amount'>Amount: </label><br/>
                <input value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                type='number' placeholder='Enter amount' id='amount' name='amount'/><br/>
                <button type='submit'>Update</button>
            </form>
            
        </div>
    )

}
export default EditBudget;