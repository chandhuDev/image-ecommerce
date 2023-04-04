import React from 'react'
import { MasonaryLayout } from './index'

const viewFeed = ({imageData}) => {
  return (
    <>
      <div className='w-full h-full p-3 bg-slate-400'>
      <div className='flex flex-col items-center w-full '>
        
         <MasonaryLayout imageDetails={imageData}/>
        
    </div>

      </div>
    </>
  )
}

export default viewFeed
