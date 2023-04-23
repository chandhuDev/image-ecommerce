import React, { useEffect,useState } from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import {Login,Home,Userprofile,CreatePin,PinDetails,Feed} from './components/index'
import { getAllPosts } from './lib'
import { appContext } from './utils/dataUtils'


const App = () => {
 const [posts,setPosts]=useState()
  async function getPosts(){
   const postDetails=getAllPosts()
   const postsData=await postDetails
   setPosts(postsData) 
   console.log(postsData)
  }
   

  useEffect(()=>{
    getPosts()
  },[])
  

  return (
    <appContext.Provider value={{posts}}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/:id/*" element={<Home/>} /> 
      </Routes>
    </appContext.Provider>
  )
}
export default App







