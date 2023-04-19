import React, { useEffect,useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import {Login,Home,Pins,LoginRedirect} from './components/index'


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/:id" element={<Home/>} /> 
    </Routes>
  )
}
export default App







