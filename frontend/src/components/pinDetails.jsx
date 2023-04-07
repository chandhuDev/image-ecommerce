import React, { useEffect, useState } from 'react'
import { useLocation,useParams } from 'react-router-dom'
import { ViewFeed } from './index'
import qs from 'qs'

const PinDetails=()=>{
  const [like,setLike]=useState(false)
  const {id}=useParams()
  
  const locate=useLocation()
  const [postData,setPostData]=useState()
  const [newData,setNewData]=useState()
  const [comment,setComment]=useState('')
  
  const data = locate.state && locate.state.detail
  const [likes,setLikes]=useState(data?.likes?.length)
  console.log(data)
  const likeExist=data.likes.includes(data.userData.id)
  console.log(likeExist)
    
 function setLikeFunc(){
  setLike(!like)
  
  const updatedPost={
    ...data,
    likes:[...postData.likes,data.userData.id],//userid
    Comment:comment
  }
  setNewData(updatedPost)
 }



const updateData = async () => {
  try {
    const postId=id
    const response = await fetch(`http://localhost:1337/api/posts/${postId}`, {
      method: 'PUT', 
      body: JSON.stringify(newData),
    });
    const updatedData = await response.json();
    setLikes(updatedData.data.attributes.likes?.length)
    if (!response.ok) {
      throw new Error(updatedData.message);
    }
    console.log('Update successful:', updatedData);
  } catch (error) {
    console.error('Error updating data:', error.message);
  }
};


// const getPostData= async ()=>{
//   try{
//    const response=await fetch(`http://localhost:1337/api/posts/${id}?${query}`)
//    const responseData=await response.json()
//    if (!responseData.ok) {
//     throw new Error(responseData.message);
//   }
//     console.log("response data from strapi",responseData)
//     setPostData(responseData)
//   }
//   catch(e){
//     console.log("error in fetching",e.message)
//   }
// }

useEffect(()=>{
 // getPostData()
},[])


return (
    <>
     <div className='flex flex-col items-center mt-4 w-full h-3/4'>
       <div className='w-full h-full  rounded-md shadow-lg animate-slide-fwd transition duration-300 p-8 cursor-pointer'>
        <div className='relative w-full h-full  flex flex-row justify-start'>
        <img src={data.imageUrl.url} alt='image-Detail' className='rounded-lg h-2/6 object-cover cursor-pointer'/>
        <div className='w-full h-full flex flex-col  gap-4 m-4'>
          <h2 className='font-bold text-2xl'>Posted By : <span className='font-mono'>{data.userData.userName}</span></h2>
          <div className='w-full flex flex-row justify-start relative'>
           <img src={data.userData.profileUrl} alt='profile-url' width={50} height={50} className='rounded-full object-cover'/>
           <p className=' text-xl font-semibold font-sans absolute bottom-3 left-16'> Contact : {data.userData.email}</p>
          </div>
          <div className='w-full h-full flex flex-row'>
             <textarea placeholder="Write a comment..." rows={3} value={comment} onChange={(e) => setComment(e.target.value)}  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className='mt-4 flex flex-row w-full h-full gap-x-10 justify-center items-center'> 
              <p className='text-xl font-semibold'>Liked by : {likes} </p>
              <button className={`px-4 py-2 ${like?'bg-purple-500':'bg-slate-300'} text-xl font-thin font-serif rounded `} onClick={()=>setLikeFunc()}>Like</button>
              <button className=" px-4  py-2 text-center rounded-md border-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 " onClick={()=>updateData()}>Submit</button>
          </div>
          
          </div>
        </div>
      </div>    
     </div>
     {/* <ViewFeed imageData={data}/> */}
    </>
)
}
export default PinDetails