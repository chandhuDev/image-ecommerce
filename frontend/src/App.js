import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Login,Home,Pins,LoginRedirect} from './components/index'

const App = () => {
  return (
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route exact path="/connect/google/redirect" element={<LoginRedirect />} />
        <Route path="/*" element={<Home/>} />
    </Routes>
  )
}
export default App







