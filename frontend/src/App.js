import React, { useEffect,useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import {Login,Home,Pins,LoginRedirect} from './components/index'
import Axios from 'axios'


const App = () => {

// const getUser=async ()=>{
//    try{
//       const res=await Axios.get(`http://localhost:5000/user/getUsers`, {withCredentials: true})
//       console.log(res)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

// useEffect(()=>{
//  getUser()
// },[])

  return (
    <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/:id" element={<Home/>} /> 
    </Routes>
  )
}
export default App







