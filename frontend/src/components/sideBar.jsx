import React ,{ useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri'
import { categories } from '../utils/dataUtils'
import logo from '../assests/logo.png'

const isNotActiveStyles='flex ietms-center md:px-5 px-3 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out captialize'
const isActiveStyles='flex items-center md:px-5 px-3 gap-3 font-bold border-r-2 border-black  transition-all duration-200 ease-in-out uppercase'

const SideBar = ({closeToggle}) => {
  const [userData,setUserData]=useState()
  const handleCloseSideBar=()=>{
    if(closeToggle){ 
      closeToggle((toggleSideBar)=>!toggleSideBar) 
    }
  }
  
  useEffect(()=>{
    const user=localStorage.getItem("userData")
    setUserData(user&&JSON.parse(user))
  },[])
return (
    <div className='flex flex-col justify-between min-w-210 overflow-x-hidden'>
      <div className='flex flex-col relative'>
         <div className='flex px-5 gap-2 my-6 pt-1 md:w-190 w-140 items-center' onClick={handleCloseSideBar}>
          <img src={logo} alt='logo' className='w-full cursor-pointer'/>
         </div>
         <div className='flex flex-col md:gap-5 gap-3 md:mt-0 mt-5'>
            <NavLink to='/home' className={({isActive})=>{
              return isActive ? isActiveStyles :isNotActiveStyles
            }} onClick={handleCloseSideBar}>
            <p className='text-xl'><RiHomeFill /></p> 
             Your Pins
            </NavLink>
            <h3 className='mt-1 px-5 text-lg md:text-xl font-semibold'>Discover categories</h3>
            {categories.map((category)=>{
             return ( <NavLink to={`/${category.name}`}className={({isActive})=>{
                return isActive ? isActiveStyles :isNotActiveStyles
              }} onClick={handleCloseSideBar} key={category?.name}>
                <img src={category?.image} alt='image' className='md:h-8 md:w-8 w-6 h-6 rounded-full'/>
               <span className='text-center mt-1'>{category?.name}</span>
              </NavLink>
            )})}
         </div>
      </div>
      <div className="absolute bottom-0">
          <div className="flex my-5 mb-3 gap-2 p-2 items-center bg-white/40 rounded-lg shadow-lg ml-2">
          <img src={userData?.profileImage} alt="user-profile" className='w-8 h-8 rounded-full md:block hidden'/>
          <p className='text-center'>{userData?.username}</p>
          </div>
         </div>
      </div>
  )
}

export default SideBar
