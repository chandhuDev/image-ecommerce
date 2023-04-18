import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import video from '../assests/share.mp4'
import logo from '../assests/logo.png'

const LoginRoute = () => {
  return (
    <div className='h-screen'>
     <div className="relative w-full h-full" >
       <video src={video}  autoPlay muted loop controls={false}
       className="w-full h-full object-cover" />
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-blackOverlay" >
          <div className='p-2 bg-slate-200 rounded-full'>
               <img src={logo} alt="shareme-logo"  width="100px"/>
            </div>
          <div className='mt-4 '>
              <a 
              href='http://localhost:1337/api/connect/google'
              target='_blank'
              rel='nonreference'
              className='text-black font-xl font-serif flex justify-center items-center border rounded-md bg-slate-300'>
              Connect to google 
              <span className='ml-2 text-center'>
                <FcGoogle />
              </span>
              </a>
           </div>
          </div>
      </div>
    </div> 
  )
}

export default LoginRoute
