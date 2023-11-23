import React from 'react';
import Sidebar from '/Users/sahana/Documents/college/WT/REACT/project/src/Components/Sidebar.jsx';
import '/Users/sahana/Documents/college/WT/REACT/project/src/Components/pages.css'
import '/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles/logsign.css'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';

function Budget(){
    const[budget,setBudget]=useState(0);
    const email = localStorage.getItem('email');
    const total = localStorage.getItem('total');
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/users/${email}/getBudget`)
            .then(response =>  setBudget(response.data))
            .catch(err =>console.log(err))

    },[]);
    const savings = budget - total
    return <div className='pages'>
    <div id='sidebar'>
        <Sidebar/>
    </div>

<div id='page'>
    
    <h1 className='heading'>Budget</h1>
    <table>
        <tr>
            <th>
            Total:
            </th>
            <td>
            Rs.{budget}
            </td>
        </tr>
        <tr>
            <th>
            Expenses:
            </th>
            <td>
            Rs.{total}
            </td>
        </tr>
        <tr>
            <th>
            Savings:
            </th>
            <td>
            Rs.{savings}
            </td>
        </tr>
    </table>
    <button id ='editbudget' onClick={()=> navigate('/EditBudget')}>Edit Budget</button>
    
    
</div>
</div>
}
export default Budget