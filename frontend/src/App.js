import React, { useEffect,useState } from 'react'
import Cookies from 'js-cookie';
import {Login,Home} from './components/index'
import { getAllPosts,getUser } from './lib/index'
import AppContext from './utils/dataUtils'

const App = () => {
  const [posts,setPosts]=useState()
  const [user,setUser]=useState()
  const Id = Cookies.get('userId');
  console.log(Id)
  const [userid,setUserId]=useState(Id)
  console.log(userid)
  console.log(document.cookie)

  const getUserData=async ()=>{
    const sliceduserId=userid?.slice(2).replace(/"/g, '');
    const userData= getUser(sliceduserId)
    const userDetails=await userData
    localStorage.setItem('userData',JSON.stringify(userDetails))
    setUser(userDetails)
  }
   
   async function getPosts(){
    const postDetails=getAllPosts()
    const postsData=await postDetails
    setPosts(postsData) 
   }

  useEffect(()=>{
    getPosts()
    console.log("1")
    if(userid){
      getUserData()
      console.log("2 cookie id",Id)
    }
  },[])

  // useEffect(()=>{
  // },[userid]) 

return (
    <AppContext.Provider value={{posts}}>
      { user ?  <Home /> : <Login />}
    </AppContext.Provider>
  )
}
export default App







