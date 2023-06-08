import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import video from '../assests/share.mp4'
import logo from '../assests/logo.png'

const LoginRoute = () => {

  function goggleButton(){
    window.open(`/user/google/callback`,"_self");
  }


  return (
    <div className='h-screen'>
     <div className="relative w-full h-full" >
       <div className="w-full h-full object-cover bg-teal-50" />
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-blackOverlay" >
          <div className='p-2 bg-slate-200 rounded-full'>
               <img src={logo} alt="shareme-logo"  width="100px"/>
            </div>
          <div className='mt-4 '>
            <button className='text-black font-xl font-serif flex justify-center items-center border rounded-md bg-slate-300' onClick={goggleButton}>
                <FcGoogle className='w-6 h-6'/>
                <span className='ml-2'>Login with Google</span>
            </button>
          </div>
          </div>
      </div>
    </div> 
  )
}

export default LoginRoute
