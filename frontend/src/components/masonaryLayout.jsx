import React from 'react'
import Masonary from 'react-masonry-css'
import {Pin} from './index'

const breakPoints={
  default:5,
  3000:6,
  2000:5,
  1200:3,
  1000:2,
  500:1
}

const masonaryLayout = ({imageDetails}) => {
 return (
    <Masonary breakpointCols={breakPoints} className='flex m-3 gap-2'>
      {imageDetails?.map((image)=>{
        return <Pin key={image.imageUrl.id}  url={image.imageUrl.url} user_name={image.userData.username} profile_url={image.userData.profileUrl} />
      })}
    </Masonary>
  )
}

export default masonaryLayout
