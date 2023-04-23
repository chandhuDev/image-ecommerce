import React,{useState,useContext} from 'react'
import { MasonaryLayout,Spinner } from './index'
import { appContext } from '../utils/dataUtils'
import { useParams } from 'react-router-dom'

const ViewFeed = () => {
  const [showComponent,setShowComponent]=useState(false)
  let { posts } = useContext(appContext);
  const {id}=useParams()
  const handleToggle = () => {
    setShowComponent(!showComponent);
  };

const userPosts=posts.filter((post)=>post.userId._id===id)
const otherPosts=posts.filter((posts)=>posts.userId._id!=id)
return (
    <>
      <div className='w-full h-full p-3 bg-slate-400 flex flex-col items-center'>
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
        {showComponent && userPosts ==null ? <Spinner message='You has not created pins yet !'/> : <MasonaryLayout imageData={ showComponent ? userPosts :  otherPosts}/> }
      </div>
      </div>
    </>
  )
}

export default ViewFeed
