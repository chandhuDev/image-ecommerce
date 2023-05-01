import React, { useEffect,useState } from 'react'
import Cookies from 'js-cookie';
import {Login,Home} from './components/index'
import { getAllPosts,getUser } from './lib/index'
import AppContext from './utils/dataUtils'



const App = () => {
 const [posts,setPosts]=useState()
 const [user,setUser]=useState()
  const Id = Cookies.get('userId');
  
  const [userid,setUserId]=useState(Id)

  const getUserData=async ()=>{
    const sliceduserId=userid.slice(2).replace(/"/g, '');
    const userData= getUser(sliceduserId)
    const userDetails=await userData
    setUser(userDetails)
    localStorage.setItem('userData',JSON.stringify(userDetails))
   }
   
   async function getPosts(){
    const postDetails=getAllPosts()
    const postsData=await postDetails
    setPosts(postsData) 
   }

  useEffect(()=>{
    getPosts()
  },[])

 useEffect(()=>{
  getUserData()
 },[userid]) 

return (
    <AppContext.Provider value={{posts}}>
      {user ?  <Home /> : <Login />}
    </AppContext.Provider>
  )
}
export default App







