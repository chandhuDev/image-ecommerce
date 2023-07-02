import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {IoMdSearch} from 'react-icons/io'
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
    <div className='flex gap-2 md:gap-4 w-full pb-6 mt-3'>
    <div className='flex justify-around items-center rounded-md bg-white mt-2 w-2/3 shadow-md '>
         <input type='text' onChange={(e)=> setSearchData(e.target.value)}
         placeholder='Search only the mentioned category Pins'
         value={searchData}
         className='w-[85%] py-5 md:text-xl text-base md:h-4 pl-3'
         onKeyDown={handleKeyDown}
         />
         <IoMdSearch fontSize={30} className='ml-2 cursor-pointer' onClick={handleSearch} />
    </div>
    <div className='flex gap-2 text-center justify-center items-center'>
       <img src={user?.profileImage} alt='user' className='w-15 h-15 hidden md:block rounded-full shadow-lg md:w-12 md:h-12 object-cover'/>
       <Link to={`/createPin`}>
        <p className='md:text-xl text-lg rounded-md bg-slate-400 text-white/80 text-center font-semibold md:ml-10 ml-0 p-1'>Create Pin</p>
       </Link>
    </div>
  </div>
)}
export default NavBar
