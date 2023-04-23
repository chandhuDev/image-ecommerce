import React, {useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CommentLayout } from './index'


const PinDetails=()=>{
  const [like,setLike]=useState(false)
  const locate=useLocation()
  const [comment,setComment]=useState('')
  const data = locate.state && locate.state.image
  function setLikeFunc(){
 
   
  }

  async function updateData() {
 
  }

return (
    <>
     <div className='flex flex-col items-center mt-4 w-full h-3/4'>
       <div className='w-full h-full  rounded-md shadow-lg animate-slide-fwd transition duration-300 p-8 cursor-pointer'>
        <div className='relative w-full h-full  flex flex-row justify-start'>
        <img src={data.imageUrl} alt='image-Detail' className='rounded-lg h-2/6 object-cover cursor-pointer'/>
        <div className='w-full h-full flex flex-col  gap-4 m-4'>
          <h2 className='font-bold text-2xl'>Posted By : <span className='font-mono'>{data.userId.username}</span></h2>
          <div className='w-full flex flex-row justify-start relative'>
           <img src={data.userId.profileImage} alt='profile-url' width={50} height={50} className='rounded-full object-cover'/>
           <p className=' text-xl font-semibold font-sans absolute bottom-3 left-16'> Contact : {data.userId.email}</p>
          </div>
          <div className='w-full h-full flex flex-row'>
             <textarea placeholder="Write a comment..." rows={3} value={comment} onChange={(e) => setComment(e.target.value)}  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className='mt-4 flex flex-row w-full h-full gap-x-10 justify-center items-center'> 
              <p className='text-xl font-semibold'>Liked by : {data.like.length} </p>
              <button className={`px-4 py-2 ${like?'bg-purple-500':'bg-slate-300'} text-xl font-thin font-serif rounded `} onClick={()=>setLikeFunc()}>Like</button>
              <button className=" px-4  py-2 text-center rounded-md border-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 " onClick={()=>updateData()}>Submit</button>
          </div>
          
          </div>
        </div>
      </div>    
     </div>
       {<CommentLayout cpomment={data.comment}/>}  
    </>
)
}
export default PinDetails