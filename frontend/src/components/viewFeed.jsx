import React,{useState,useContext,useEffect} from 'react'
import { MasonaryLayout } from './index'
import AppContext ,{user} from '../utils/dataUtils'
import { getAllPosts } from '../lib/index'

const ViewFeed = () => {
  const [showComponent,setShowComponent]=useState(true)
  const [userPosts,setUserPosts]=useState(null)
  let { posts } = useContext(AppContext);
  const handleToggle = () => {
    setShowComponent(!showComponent);
  };
const otherPosts=posts?.filter((posts)=>posts.userId._id!==user._id)

useEffect(()=>{
async function getFreshData(){
  const allPostsData=getAllPosts()
  const allPosts=await allPostsData
  const userPosts=allPosts?.filter((post)=>post.userId._id===user._id)
  setUserPosts(userPosts)
}
getFreshData()
},[userPosts])

if(!userPosts) {
return (  
  <div className='w-full h-full bg-slate-400 flex justify-center items-center mx-auto px-4 py-8'>
    <h2 className='fornt-bold text-2xl font-serif'>You has not created any posts yet! Do create one</h2>
  </div>
 )
}

return (
    <>
      <div className='w-full h-full p-3 flex flex-col items-center'>
       <div className='my-5 flex justify-center w-full'>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-tl-lg rounded-bl-lg ${
            showComponent ? 'bg-orange-500' : 'bg-purple-500'
          }`}
        >
         Your pins
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-tr-lg rounded-br-lg ${
            !showComponent ? 'bg-orange-500' : 'bg-purple-500'
          }`}
        >
          Others feed
        </button>
       </div> 
      <div className='flex flex-col items-center w-full '>
         <MasonaryLayout imageData={ showComponent ? userPosts :  otherPosts}/> 
      </div>
      </div>
    </>
  )
}

export default ViewFeed
