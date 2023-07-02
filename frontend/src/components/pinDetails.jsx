import React, {useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CommentLayout } from './index'
import {user} from '../utils/dataUtils'
import { updatePost } from '../lib/index'


const PinDetails=()=>{
  const locate=useLocation()
  const [comment,setComment]=useState('')
  const [data,setData]=useState(locate.state && locate.state.image)
  const likeByUser = data?.like?.includes(user._id)
  const [like,setLike]=useState(likeByUser)

  function setLikeFunc(){
    return like===likeByUser ? false : true
   }

  async function updateData() {
     const likeBoolean = setLikeFunc()
     const updateData={
      comment: comment,
      postId: data?._id,
      like: likeBoolean && likeBoolean,
      userId: user?._id
    }
    setComment('')
    const PostData = updatePost(updateData)
     const newData = await PostData
     newData&&setData(newData)
  }
  useEffect(()=>{
  },[data])

return (
    <>
     <div className='flex flex-col items-center mt-4 w-full h-3/4'>
       <div className='w-full h-full  rounded-md shadow-lg animate-slide-fwd transition duration-300 p-4 md:p-8 cursor-pointer'>
        <div className='relative w-full h-full  flex md:flex-row flex-col justify-start'>
        <img src={data?.imageUrl} alt='image-Detail' className='rounded-lg md:h-2/6 h-1/4 object-cover cursor-pointer'/>
        <div className='w-full h-full flex flex-col  md:gap-4 gap-2 md:m-4 m-2'>
          <h2 className='font-semibold text-xl'>Posted By : <span className='font-mono md:text-2xl text-base'>{data?.userId?.username}</span></h2>
          <div className='w-full flex flex-row justify-start relative md:mt-3 mt-1'>
           <img src={data?.userId?.profileImage} alt='profile-url'  className='rounded-full object-cover md:w-14 md:h-14 w-10 h-10 '/>
           <p className=' md:text-xl text-base font-semibold font-sans absolute md:bottom-3 bottom-1 md:left-16 left-12'> {data?.userId?.email}</p>
          </div>
          <div className='w-full h-full flex flex-row md:mt-5 mt-3'>
             <textarea placeholder="Write a comment..." rows={3} value={comment} onChange={(e) => setComment(e.target.value)}  className="w-full md:p-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className='md:mt-8 mt-4 flex flex-row w-full h-full md:gap-x-10 gap-x-4 justify-center items-center'> 
              <p className='md:text-xl text-base font-semibold'> {data?.like?.length} likes </p>
              <button className={`md:px-4 px-2 md:py-2 py-1 ${like?'bg-purple-500':'bg-slate-400'} md:text-xl text-base font-thin font-serif rounded-md `}   onClick={()=>setLike(like=>!like)}>Like</button>
              <button className=" md:px-4 md:py-2 px-2 py-1 text-center rounded-md md:border-2 border-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500/70 " onClick={()=>updateData()}>Submit</button>
          </div>
         </div>
       </div>
      </div>    
     </div>
       {<CommentLayout comment={data.comment}/>}  
    </>
)}
export default PinDetails