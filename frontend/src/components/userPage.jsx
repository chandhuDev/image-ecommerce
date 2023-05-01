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
      const userPosts=allPosts?.filter((post)=>post.userId._id===user._id)
      setUserPosts(userPosts)
    }
   getFreshData()
},[])


  return (
    <>
      <MasonaryLayout  imageData={userPosts}/>
    </>
  )
}

export default UserPage
