import React from 'react'
import "./Sidebar.css"
import {SidebarData} from './SidebarData'
import { useNavigate } from 'react-router-dom';



function Sidebar(){
    const navigate = useNavigate()
    return(
        
    <div className = "Sidebar">
        <ul className='SidebarList'>
            <li className='row' id="piggy"> <div>PIGGY PURSE</div></li>
        {SidebarData.map((val,key)=>{
            return(<li key={key}
                className='row'
                id = {window.location.pathname===val.link? "active":""  }
            onClick={()=>{
                navigate(val.link)
                }}>
                    <div>{" "}{val.icon}{" "}{val.title}</div>
                
                    
                
                </li>)
                

        
    }
        )}
        </ul>
        </div>)
}
// function Sidebar(){
//     return <div className='Sidebar'></div>
// }
export default Sidebar;
