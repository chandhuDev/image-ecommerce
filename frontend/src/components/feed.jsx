import React,{useState,useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {MasonaryLayout} from './index'
import { appContext,user } from '../utils/dataUtils'
import { getAllPosts } from '../lib/index'

const Feed = () => {
    const {category}=useParams()
    const categoryValue=category&&category.toLowerCase()
    const [posts1,setPosts]=useState()
    const categoryPosts={}
    const {posts}= useContext(appContext)
    

    



// if(categoryValue){
    //    categoryPosts=posts.filter(post => post.categoryId.category===categoryValue)
    // }
    
    async function getPosts(){
     const postDetails=getAllPosts()
     const postsData=await postDetails
     setPosts(postsData)
    }

    useEffect(()=>{
       getPosts()
    },[])

    if(!posts){
      return null
    }
  

    const def=posts.filter(post=>
      
      post.userId._id!=user._id)
    
    
return (
    <div className='flex flex-col items-center w-full '>
     <MasonaryLayout  imageData= {posts1}/>
     
    </div>
  )
}

export default Feed
