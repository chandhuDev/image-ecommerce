import React,{useState,useEffect} from 'react'
import {user} from '../utils/dataUtils'
import {MasonaryLayout} from './index'
import { getAllPosts } from '../lib'

const UserPage = () => {
const [userPosts,setUserPosts]=useState(null)

useEffect(()=>{
    async function getFreshData(){
      const allPostsData=getAllPosts()
      const allPosts=await allPostsData
      const userPosts=allPosts?.filter((post)=>post?.userId?._id===user?._id)
      setUserPosts(userPosts)
    }
   getFreshData()
},[])
  
if(userPosts?.length==0) {
  return (  
    <div className='w-full h-full flex justify-center items-center mx-auto px-4 py-8'>
      <h2 className='fornt-bold text-2xl font-serif'>You has not created any posts yet! Do create one</h2>
    </div>
   )
  }

return (
    <>
      <MasonaryLayout  imageData={userPosts}/>
    </>
  )
}

export default UserPage
