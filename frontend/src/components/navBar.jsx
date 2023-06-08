import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {IoMdSearch,IoMdAddCircle} from 'react-icons/io'
import {user} from '../utils/dataUtils'

const NavBar = () => {

  const [searchData,setSearchData]=useState('')
  const navigate=useNavigate()

  function feedNavigate(){
    navigate(`/search/${searchData}`)
    setSearchData('')
  } 
  const handleSearch=()=>{
    feedNavigate()
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
     feedNavigate()
    }
  }


  return (
    <div className='flex gap-2 md:gap-4 w-full  pb-6 mt-3'>
    <div className='flex justify-start items-center rounded-md bg-white mt-2  w-full shadow-md '>
         <input type='text' onChange={(e)=> setSearchData(e.target.value)}
         placeholder='Search only the mentioned category Pins'
         value={searchData}
         className='w-11/12 py-5 text-xl md:h-4 pl-5'
         onKeyDown={handleKeyDown}
         />
         <IoMdSearch fontSize={30} className='ml-2 cursor-pointer' onClick={handleSearch} />
    </div>
    <div className='flex gap-2 text-center'>
       <img src={user?.profileImage} alt='user' className='w-15 h-15 hidden md:block rounded-full shadow-lg md:w-12 md:h-12 object-cover'/>
       <Link to={`/createPin`}>
       <IoMdAddCircle className='w-12 h-12 md:ml-0 mt-3 md:mt-0'/>
       </Link>
    </div>
  </div>
)}
export default NavBar
