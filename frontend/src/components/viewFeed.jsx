import React from 'react'
import { MasonaryLayout } from './index'

const ViewFeed = () => {
  const imagesList=localStorage.getItem('imagesList')
  const images=JSON.parse(imagesList)
  return (
    <>
      <div className='w-full h-full p-3 bg-slate-400'>
      <div className='flex flex-col items-center w-full '>
        <MasonaryLayout imageDetails={images}/>
      </div>
      </div>
    </>
  )
}

export default ViewFeed
