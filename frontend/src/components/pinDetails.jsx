import React, { useEffect, useState } from 'react'
import { useLocation,useParams } from 'react-router-dom'
import { Spinner,CommentLayout } from './index'
import qs from 'qs'

const PinDetails=()=>{
  const [like,setLike]=useState(false)
  const {id}=useParams()
  const locate=useLocation()
  const [postWithComment,setPostWithComment]=useState()
  const [comment,setComment]=useState('')
  const data = locate.state && locate.state.detail
 

  const [likes,setLikes]=useState()
 
  const [postData,setPostData]=useState(null)
  const userIdinJson=localStorage.getItem('userDataId')
  const userId=JSON.parse(userIdinJson)
  
  
  const likeExist=data.likes.includes(data.userData.id)
  
  let updatedPostWithComment={}  
   
 function setLikeFunc(){
  setLike(!like)
  if(comment&&comment.length>0&&like){
   updatedPostWithComment={
    Comment:comment,
   }
  
    setPostWithComment(updatedPostWithComment)
    
   }
  
  else if(comment&&comment.length>0){
    updatedPostWithComment={
      Comment:comment
    }
   setPostWithComment(updatedPostWithComment)
  }
   
 }

 const query = qs.stringify(
  {
    populate: {
       likes : true ,
       comments: {
        populate : {
          Comment : true,
          userlist : {
            populate:{
              email : true,
              username : true
            }
          }
        }
       },
    },
  },
  {
    encodeValuesOnly: true // prettify URL
  }
)

const updateData = async () => {
  try {
   const commentForm=new FormData()
   commentForm.append("data",JSON.stringify(postWithComment))
   const response1 = await fetch('http://localhost:1337/api/comments', { method: 'POST', body: commentForm })
   const result1 = await response1.json();
     
      
   let updateData={
        likes: userId,
        comments: result1.data.id,
    }
      const newFormData=new FormData()
     newFormData.append("data",JSON.stringify(updateData))
    const response = await fetch(`http://localhost:1337/api/posts/${id}`, {
      method: 'PUT', 
      body: newFormData,
    });
    const updatedData = await response.json();
    
    
    if (!response.ok) {
      throw new Error(updatedData.message);
    }
    
  } catch (error) {
    console.error('Error updating data:', error.message);
  }
};




const getPostData= ()=>{
  fetch(`http://localhost:1337/api/posts/${id}?${query}`)
          .then(response => response.json())
          .then(ImageData => {
           setPostData(ImageData)
           setLikes(ImageData.data.attributes.likes.length)
           
           
           })
         .catch(error => {
          console.error('Error fetching data:', error);
          });
}

useEffect(()=>{
  getPostData()
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
       {!postData ? <Spinner message={'Wait for the comments to load '}/>:<CommentLayout comments={postData}/>}  
    </>
)
}
export default PinDetails