import React from 'react';
import Sidebar from '/Users/sahana/Documents/college/WT/REACT/project/src/Components/Sidebar.jsx';
import '/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles/logsign.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';
function Home(){
  const[info,setInfo]=useState([])
    const email = localStorage.getItem('email');
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/users/${email}/getInfo`)
            .then(response =>  setInfo(response.data))
            .catch(err =>console.log(err))

    },[]);
    
    return(
      <div className='pages'>
      <div id='sidebar'>
          <Sidebar/>
      </div>
  
  <div id ='page'>
  <h1 className='heading'>Your Details</h1>

    <table>
        <tr>
            <th>
            Name
            </th>
            <td>
            {info.name}
            </td>
        </tr>
        <tr>
            <th>
            Email
            </th>
            <td>
            {info.email}
            </td>
        </tr>
        
    </table>
    <button id='editbudget' onClick={() => {localStorage.setItem('email','') ; 
  navigate('/start')}}>Log Out</button>
  </div>
  </div>
    )
}
export default Home