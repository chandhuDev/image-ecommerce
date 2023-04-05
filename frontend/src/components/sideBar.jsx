import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'
import { categories } from '../utils/dataUtils'

import logo from '../assests/logo.png'

const isNotActiveStyles='flex ietms-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out captialize'
const isActiveStyles='flex items-center px-5 gap-3 font-bold border-r-2 border-black  transition-all duration-200 ease-in-out uppercase'

const categoryArray=[
  {name:'Wallpapers'},
  {name:'Travel'},
  {name:'Nature'},
  {name:'Animals'},
  {name:'Experimental'},
  {name:'3d-Renders'},
  {name:'Textures-Patterns'},
  {name:'Street-Photography'},
  {name:'Fashion-Beauty'}
]

const sideBar = ({user,closeToggle}) => {
  
  const handleCloseSideBar=()=>{
    if(closeToggle) closeToggle(false)
  }



return (
    <div className='flex flex-col justify-between  min-w-210 '>
      <div className='flex flex-col'>
         <Link to='/user-profile' className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={handleCloseSideBar}>
          <img src={logo} alt='logo' className='w-full cursor-pointer'/>
         </Link>
         <div className='flex flex-col gap-5'>
            <NavLink to='/' className={({isActive})=>{
              return isActive ? isActiveStyles :isNotActiveStyles
            }} onClick={handleCloseSideBar}>
             <RiHomeFill />
             Home
            </NavLink>
            <h3 className='mt-1 px-5 text-lg 2xl:text-xl '>Discover categories</h3>
            {categories.map((category)=>{
             return ( <NavLink to={`/${category.name}`}className={({isActive})=>{
                return isActive ? isActiveStyles :isNotActiveStyles
              }} onClick={handleCloseSideBar} key={category.name}>
               {category.name}
              </NavLink>
            )})}
         </div>
      </div>
      {user && (
        <Link to={`user-profile/${user.name}`}
        className="absolute bottom-0"
        onClick={handleCloseSideBar}
        >
          <div className="flex my-5 mb-3 gap-2 p-2 items-center bg-white  rounded-lg shadow-lg mx-2">
          <img src={user.picture} alt="user-profile" className='w-8 h-8 rounded-full'/>
          <p className='text-center'>{user.name}</p>
          </div>
         </Link>
      )}
    </div>
  )
}

export default sideBar
