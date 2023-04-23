import React from 'react'
import { useNavigate  } from 'react-router-dom'


const Pin = ({image}) => {
   const navigate=useNavigate()
   function getPinDetails(){
   navigate(`/${image._id}/pinDetail`,{
    state:{
      image
   }})


 }

 return (
    <div onClick={()=>getPinDetails()}>
      <div className='flex flex-col rounded-md border-5 shadow-lg m-3  hover:scale-105 duration-150'>
       <img src={`${image.imageUrl}`} loading='lazy' width={180} height={300} alt='image' className='w-full rounded-lg hover:ease-in transition duration-300 object-cover ease-out cursor-pointer'/>
      <div className='flex flex-row justify-center items-center cursor-pointer '>
        <img src={`${image.userId.profileImage}`} loading='lazy'  className='rounded-full w-8 h-8 object-fill ml-2 mb-2 mt-1 grow-0'/>
        <p className='flex justify-start font-semibold grow ml-3 items-center text-xl font-mono'>{image.userId.username}</p>
      </div>    
    </div>
    </div>
   )
}

export default Pin
