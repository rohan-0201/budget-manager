import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles.css";

export default function Navbar() {
  return (<div className='page'>
    <nav className="nav">
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
  );
}
