import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './View/Home/Home'
import SignIn from './View/SignIn/SignIn'
import MainLayout from './MainLayout/MainLayout'
import Transaction from './View/Dashboard/Transaction'


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainLayout/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/transaction' element={<Transaction/>}></Route>
    </Route>

    </Routes>
   </BrowserRouter>

   </>
  )
}

export default App
