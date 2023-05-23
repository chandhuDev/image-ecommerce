import React from 'react'
import {HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle} from 'react-icons/ai'
import { useState ,useRef,useEffect} from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import { Sidebar,Pins} from './index'
import logo from '../assests/logo.png'
import {user} from '../utils/dataUtils'


const HomeRoute = () => {
  const [toggleSideBar,settoggleSideBar]=useState(false)
  const scrollRef=useRef(null)


  const handleClick = () => {
    console.log("clicked")
    console.log(toggleSideBar);
    settoggleSideBar(false);
  };
  
useEffect(()=>{
   scrollRef.current.scrollTo(0,0)
  },[])
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-full transition-height duration-75 ease-out">
      {toggleSideBar && (
        <div className="fixed w-3/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
        <div
          className="absolute w-full flex justify-end items-center top-6 right-8 z-20"
          onClick={handleClick}
        >
          <AiFillCloseCircle fontSize={30} className="cursor-pointer" />
        </div>
        <Sidebar closeToggle={settoggleSideBar} />
       </div>
      )}
    <div className="hidden md:flex h-screen flex-initial">
      <Sidebar />
    </div>
    <div className="flex md:hidden flex-row">
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
        <HiMenu fontSize={40} className="cursor-pointer" onClick={() => settoggleSideBar((toggleBar)=>!toggleBar)} />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <img src={user ? user?.profileImage : ''} alt="logo"  className='ml-1 w-14 rounded-full'/>
      </div>
    </div>
    <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
    <Routes>
          <Route path="/*" element={<Pins />} />
    </Routes>
    </div>
  </div>
 );
}
export default HomeRoute
