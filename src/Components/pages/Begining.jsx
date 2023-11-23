import React from 'react';
import Navbar from './navbar';
import ImageComponent from './Start';
import "/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles.css";
function Begining(){
    return(
        <div>
            <div><nav className="nav">
        PIGGY PURSE

      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
</div>
            <div><ImageComponent/></div>
        </div>
    )
}

export default Begining
