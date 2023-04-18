import React from 'react'
import Masonary from 'react-masonry-css'
import {Pin} from './index'

const breakPoints={
  default:4,
  3000:5,
  2000:4,
  1200:4,
  1000:3,
  500:2
}

const masonaryLayout = ({imageDetails}) => {
  
return (
  <Masonary breakpointCols={breakPoints} className='flex w-full h-full  gap-6 overflow-x-hidden overflow-y-hidden duration-300 animate-slide-fwd'>
      {imageDetails?.map((image)=>{
        return <Pin key={image.id}  url={image.imageUrl.url} userName={image.userData.userName} profileUrl={image.userData.profileUrl} detail={image}/>
      })}
    </Masonary>
    
  )
}

export default masonaryLayout
