import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './View/Home/Home'

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>

   </>
  )
}

export default App
