import React from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import {Login,Home,Pins, Userprofile} from './components/index'





const App = () => {
  return (
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/*" element={<Home/>} />
        <Route path="user-profile/*" element={<Userprofile/>} />
    </Routes>
  )
}

export default App







