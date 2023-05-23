import React from 'react'
import { NavLink} from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri'
import { categories } from '../utils/dataUtils'
import logo from '../assests/logo.png'
import {user} from '../utils/dataUtils'

const isNotActiveStyles='flex ietms-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out captialize'
const isActiveStyles='flex items-center px-5 gap-3 font-bold border-r-2 border-black  transition-all duration-200 ease-in-out uppercase'

const SideBar = ({closeToggle}) => {

  const handleCloseSideBar=()=>{
    if(closeToggle){ 
      closeToggle((toggleSideBar)=>!toggleSideBar) 
    }
  }

return (
    <div className='flex flex-col justify-between min-w-210'>
      <div className='flex flex-col relative'>
         <div className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={handleCloseSideBar}>
          <img src={logo} alt='logo' className='w-full cursor-pointer'/>
         </div>
         <div className='flex flex-col gap-5'>
            <NavLink to='/home' className={({isActive})=>{
              return isActive ? isActiveStyles :isNotActiveStyles
            }} onClick={handleCloseSideBar}>
            <p className='text-xl'><RiHomeFill /></p> 
             Your Pins
            </NavLink>
            <h3 className='mt-1 px-5 text-lg 2xl:text-xl '>Discover categories</h3>
            {categories.map((category)=>{
             return ( <NavLink to={`/${category.name}`}className={({isActive})=>{
                return isActive ? isActiveStyles :isNotActiveStyles
              }} onClick={handleCloseSideBar} key={category?.name}>
                <img src={category?.image} alt='image' className='h-8 w-8 rounded-full'/>
               <span className='text-center mt-1'>{category?.name}</span>
              </NavLink>
            )})}
         </div>
      </div>
      <div className="absolute bottom-0">
          <div className="flex my-5 mb-3 gap-2 p-2 items-center bg-white  rounded-lg shadow-lg ">
          <img src={user?.profileImage} alt="user-profile" className='w-8 h-8 rounded-full'/>
          <p className='text-center'>{user?.username}</p>
          </div>
         </div>
      </div>
  )
}

export default SideBar
