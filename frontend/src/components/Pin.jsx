import React from 'react'
import { useNavigate  } from 'react-router-dom'


const Pin = ({image}) => {
   const navigate=useNavigate()
   function getPinDetails(){
   navigate(`/${image?._id}/pinDetail`,{
    state:{
      image
   }})
}
return (
    <div onClick={()=>getPinDetails()}>
      <div className='flex flex-col rounded-md border-5 shadow-lg m-3  hover:scale-105 duration-150'>
       <img src={`${image?.imageUrl}`} loading='lazy' width={180} height={300} alt='image' className='w-full rounded-lg hover:ease-in transition duration-300 object-cover ease-out cursor-pointer'/>
      <div className='flex flex-row justify-center items-center cursor-pointer md:mt-3 mt-2'>
        <img src={`${image?.userId?.profileImage}`} loading='lazy'  className='rounded-full md:w-8 md:h-8 w-4 h-4 object-fill md:ml-2 md:mb-2  grow-0'/>
        <p className='flex justify-start font-semibold grow md:ml-3 ml-1 items-center md:text-xl text-sm font-mono '>{image?.userId?.username}</p>
      </div>    
    </div>
    </div>
   )
}

export default Pin
