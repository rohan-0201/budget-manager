import React from 'react';
import Sidebar from '/Users/sahana/Documents/college/WT/REACT/project/src/Components/Sidebar.jsx';
import '/Users/sahana/Documents/college/WT/REACT/project/src/Components/pages.css'
import '/Users/sahana/Documents/college/WT/REACT/project/src/Components/styles/SplitExpenses.css'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';

function SplitExpenses(){
    const[expenses,setExpenses]=useState([])
    const email = localStorage.getItem('email');
    const [total, setTotalExpenses] = useState(0);
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/users/${email}/getUser`)
            .then(response =>  setExpenses(response.data))
            .catch(err =>console.log(err))

    },[]);
    useEffect(() => {
        let total = 0;
        expenses.forEach((expense) => {
          total += expense.amount;
        });
        setTotalExpenses(total);
        localStorage.setItem('total', total);
      }, [expenses]);
      
    const navigate = useNavigate()
    return (
        <div className='pages'>
        <div id='sidebar'>
            <Sidebar/>
        </div>

    <div id='page'>
        
        <div><h1 className='heading'>Your Expenses</h1></div>
        
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  Category
                </th>
                <th>
                  Amount
                </th>
                <th>
                  Date
                </th>
                <th>
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense,key) => (
                <tr key = {key}>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.datetime.slice(0, 10)}</td>
                  <td>{expense.datetime.slice(11, 16)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div><button id ='addfriends' onClick={()=> navigate('/AddExpense')}>Add Expense</button></div>
    </div>
    </div>
    )
}
export default SplitExpenses