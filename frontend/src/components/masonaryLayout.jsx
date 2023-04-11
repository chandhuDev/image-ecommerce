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

const masonaryLayout = (images) => {
  console.log(images)
  const dataOfImages= images.imageDetails.data.map((image)=>{
    return {
      likes : image.attributes.likes.data.map((like)=>{
        return like.id
      }),
      section : image.attributes.section.data.attributes.Section,
      Description : image.attributes.Description,
      userData : {
       userName: image.attributes.userlist.data.attributes.username,
       email : image.attributes.userlist.data.attributes.email ,
       profileUrl : `http://localhost:1337${image.attributes.userlist.data.attributes.profileImage.data.attributes.url}`,
       id : image.attributes.userlist.data.id
      },
      id:image.id,
      comments : image.attributes.comments.data.map((commentData)=>{
        return {
          Comment: commentData.attributes.Comment,
          user: {
              name : commentData.attributes.userlist.data.attributes.username,
              email : commentData.attributes.userlist.data.attributes.email
              }
        }
      }),
      imageUrl : { 
        id:image.attributes.Image.data.id,
        url:`http://localhost:1337${image.attributes.Image.data.attributes.url}`
      }}
  })



return (
  <Masonary breakpointCols={breakPoints} className='flex w-full h-full  gap-6 overflow-x-hidden overflow-y-hidden duration-300 animate-slide-fwd'>
      {dataOfImages?.map((image)=>{
        return <Pin key={image.id}  url={image.imageUrl.url} userName={image.userData.userName} profileUrl={image.userData.profileUrl} detail={image}/>
      })}
    </Masonary>
    
  )
}

export default masonaryLayout
