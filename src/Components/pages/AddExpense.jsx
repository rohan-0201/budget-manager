import React from 'react'
import { useState } from 'react'
import '/Users/sahana/Documents/college/WT/REACT/project/src/Components/pages.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles/logsign.css'
function AddExpense(props){
    
    const[category,setCategory]=useState('Food');
    const[amount,setAmount]=useState('');
    const [dateTime, setDateTime] = useState(Date.now);
    const email = localStorage.getItem('email');
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:3001/api/users/${email}/expenses`,{category, amount, dateTime})
        .then(result => {console.log(result)
            const { data, status } = result;
      console.log(data, status);
            if(result.data === "Success"){
            navigate('/SplitExpenses')}
        })
        .catch(err => console.log(err))
        
    }
    const handleDateChange = (e) => {
        setDateTime(new Date(e.target.value));
      };


    return(
        <div className='auth'>
       
            <form className = 'addexpense' onSubmit={handleSubmit}>
            <h1>Add Expense</h1>
            <label htmlFor='category'>Category</label>
            <select id="category" name="category" value={category}
            onChange={(e) => setCategory(e.target.value)}>
                <option value='Food'>Food</option>
                <option value='Transport'>Transport</option>
                <option value='Health'>Health</option>
                <option value='Housing'>Housing</option>
                <option value='Entertainment'>Entertainment</option>
                </select>
                <label htmlFor='amount'>Amount Spent</label>
                <input value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                type='number' placeholder='Enter amount' id='amount' name='amount'/><br/>
                <button type='submit'>Add Expense</button>
            </form>
            
        </div>
    )
}
export default AddExpense