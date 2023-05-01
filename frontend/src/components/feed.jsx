import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import {MasonaryLayout} from './index'
import AppContext,{ user,categories } from '../utils/dataUtils'




const Feed = () => {
    const {category}=useParams()
    const categoryValue=category&&category.toLowerCase()
    let categoryPosts={}
    const {posts}= useContext(AppContext)
    const postForFeed = posts?.filter(post=>post.userId._id!=user._id)
    const checkSearch=checkCategory(categoryValue)
    
    function checkCategory(){
     return categories.some(category=>category.name.toLowerCase()===categoryValue)
    }

    if(categoryValue){
      categoryPosts=postForFeed?.filter(post => post.categoryId.category===categoryValue)
    }

return (
    <div className='flex flex-col items-center w-full '>
     <MasonaryLayout  imageData= {category ? categoryPosts :postForFeed}/>
    </div>
  )
}

export default Feed
