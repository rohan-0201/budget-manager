import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Register from './Register'
import Home from './Components/pages/Home'
import SplitExpenses from './Components/pages/SplitExpenses'
import Budget from './Components/pages/Budget'
import EditBudget from './Components/pages/EditBudget'
import AddExpense from './Components/pages/AddExpense'
import NewGroup from './Components/pages/NewGroup'
import Navbar from './Components/pages/navbar'
import ImageComponent from './Components/pages/Start'
import Contact from './Components/pages/contact'
import About from './Components/pages/about'
import Begining from './Components/pages/Begining'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/start" element={<Begining />} />
    <Route path="/navbar" element={<Navbar />} />
    <Route path="/" element={<ImageComponent />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
      <Route path = '/register' element = {<Register/>}></Route>
      <Route path = '/login' element = {<Login/>}></Route>
      <Route path = '/Home' element = {<Home/>}></Route>
      <Route path = '/SplitExpenses' element = {<SplitExpenses/>}></Route>
      <Route path = '/Budget' element = {<Budget/>}></Route>
      <Route path = '/AddExpense' element = {<AddExpense/>}></Route>
      <Route path = '/EditBudget' element = {<EditBudget/>}></Route>
      <Route path = '/NewGroup' element = {<NewGroup/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
