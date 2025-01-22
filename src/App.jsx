import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './View/Home/Home'
import SignIn from './View/SignIn/SignIn'
import MainLayout from './MainLayout/MainLayout'
import Transaction from './View/Dashboard/Transaction'
import Dashboard from './View/Dashboard/Dashboard'
import Trading from './View/Dashboard/Trading'
import Trade2 from './View/Dashboard/Trade2'
import AccountSettings from './View/Dashboard/AccountSettings'
import Statistics from './View/Dashboard/Statistics'


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainLayout/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/transaction' element={<Transaction/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/trading' element={<Trading/>}></Route>
    <Route path='/trade' element={<Trade2/>}></Route>
    <Route path='/accountdetails' element={<AccountSettings/>}></Route>
    <Route path='/stats' element={<Statistics/>}></Route>
    </Route>

    </Routes>
   </BrowserRouter>

   </>
  )
}

export default App
