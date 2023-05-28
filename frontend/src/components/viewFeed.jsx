import React,{useState,useContext,useEffect} from 'react'
import { MasonaryLayout } from './index'
import AppContext ,{user} from '../utils/dataUtils'
import { getAllPosts } from '../lib/index'

const ViewFeed = () => {
  const [showComponent,setShowComponent]=useState(1)
  const [userPosts,setUserPosts]=useState(null)
  let { posts } = useContext(AppContext);
  const handleToggleByUser = () => {
    setShowComponent(1)
  }
  const handleToggleByOthers = () => {
    setShowComponent(2)
  }
const otherPosts=posts?.slice(0,16).filter((posts)=>posts?.userId?._id!==user?._id)

useEffect(()=>{
async function getFreshData(){
  const allPostsData=getAllPosts()
  const allPosts=await allPostsData
  const userPosts=allPosts?.filter((post)=>post?.userId?._id===user?._id)
  setUserPosts(userPosts)
}
getFreshData()
},[])


if(!showComponent&&userPosts?.length==0) {
return (  
  <div className='w-full h-full bg-slate-200 flex justify-center items-center mx-auto px-4 py-8'>
    <h2 className='fornt-bold text-2xl font-serif'>You has not created any posts yet!</h2>
  </div>
 )
}

return (
    <>
      <div className='w-full h-full p-3 flex flex-col items-center'>
       <div className='my-5 flex justify-center w-full'>
        <button
          onClick={handleToggleByUser}
          className={`px-4 py-2 rounded-tl-lg rounded-bl-lg bg-white`}
        >
         Your pins
        </button>
        <button
          onClick={handleToggleByOthers}
          className={`px-4 py-2 rounded-tr-lg rounded-br-lg bg-white`}
        >
          Others feed
        </button>
       </div> 
      <div className='flex flex-col items-center w-full '>
         <MasonaryLayout imageData={ showComponent===1 ? userPosts :  otherPosts}/> 
      </div>
      </div>
    </>
  )
}

export default ViewFeed
