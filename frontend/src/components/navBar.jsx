import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {IoMdSearch,IoMdAddCircle} from 'react-icons/io'
import {user} from '../utils/dataUtils'

const NavBar = () => {
     const [searchData,setSearchData]=useState('')

   

const navigate=useNavigate()




const handleSearch=()=>{
  navigate(`/:id/search/${searchData}`)
}

  return (
    <div className='flex gap-2 md:gap-4 w-full  pb-6 mt-3'>
    <div className='flex justify-start items-center px-2 rounded-md bg-white mt-2 w-full border-none outline-none shadow-md '>
         <input type='text' onChange={(e)=> setSearchData(e.target.value)}
         placeholder='Search'
         value={searchData}
         className='w-11/12 py-1 md:h-4'/>
         <IoMdSearch fontSize={30} className='ml-2 cursor-pointer' onClick={handleSearch}/>
    </div>
    <div className='flex gap-2'>
       <Link to={`user-profile/chandhu`}>
        <img src={user.profileImage} alt='user' className='w-15 h-15 hidden md:block rounded-full shadow-lg md:w-12 md:h-12 object-cover'/>
       </Link>
       <Link to={`/${user._id}/createPin`}>
       <IoMdAddCircle className='w-10 h-10 md:w-12 md:h-12 md:ml-0'/>
       </Link>
    </div>

    </div>
  )
}

export default NavBar
