import Login from './Login';
import './App.css';
import Register from './Register';
import React from 'react';
import { useState } from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
}

  return (
    <div className="App">
     {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
     }
    </div>
  );
}

export default App;
