import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'
import qs from 'qs'

const Feed = () => {
    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState([])
    const {category}=useParams()
    
const query = qs.stringify(
  {
    populate: {
       likes : true ,
       section : true,
       userlist : {
          populate : {
            profileImage : true ,
            posts : {
            populate : {
                 Image : true ,
                 likes : true,
                 section : true
               }
               }
          } 
        },
       Image : true
    },
    
  },
  {
    encodeValuesOnly: true // prettify URL
  }
);







function getTheData(){
  // const categoryValue=category.toLowerCase()
  const placeHolderValue=category ? '': 'wallpapers'
  
     fetch(`http://localhost:1337/api/posts?${query}`)
          .then(response => response.json())
          .then(ImagesList => {
            //console.log(ImagesList)
            const dataOfImages= ImagesList.data.map((image)=>{
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
              imageUrl : { 
                id:image.attributes.Image.data.id,
                url:`http://localhost:1337${image.attributes.Image.data.attributes.url}`
              }}
          })
          // console.log(dataOfImages)
          setImageData(dataOfImages)
          })
         .catch(error => {
          console.error('Error fetching data:', error);
          });
  }

useEffect(()=>{
  getTheData()
  setLoading(false)
},[])

 


 
  return (
    <div className='flex flex-col items-center w-full '>
     { loading ?<Spinner message={'We need to load the content , wait for it'}/>:
      <MasonaryLayout imageDetails={imageData}/>
     } 
    </div>
  )
}

export default Feed
