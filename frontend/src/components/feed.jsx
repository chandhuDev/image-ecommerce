import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'
import qs from 'qs'

const Feed = () => {
    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState([])
    const {categoryId}=useParams()
    
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
    }
  },
  {
    encodeValuesOnly: true // prettify URL
  }
);







function getTheData(){
  const placeHolderValue=categoryId ? categoryId : 'wallpapers'
  const placeholder=placeHolderValue.toLowerCase()
     fetch(`http://localhost:1337/api/posts?${query}`)
          .then(response => response.json())
          .then(ImagesList => {
            const dataOfImages= ImagesList.data.map((image)=>{
            return {
              likes : image.attributes.likes.data.map((like)=>{
                return like.id
              }),
              section : image.attributes.section.data.attributes.Section,
              userData : {
               userName: image.attributes.userlist.data.attributes.username,
               email : image.attributes.userlist.data.attributes.email ,
               profileUrl : `http://localhost:1337${image.attributes.userlist.data.attributes.profileImage.data.attributes.url}`,
               id : image.attributes.userlist.data.id
              },
              imageUrl : { 
                id:image.attributes.Image.data.id,
                url:`http://localhost:1337${image.attributes.Image.data.attributes.url}`
              }}
          })
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
    <div className='flex flex-col items-center'>
     { loading ?<Spinner message={'We need to load the content , wait for it'}/>:
      <MasonaryLayout imageDetails={imageData}/>
     } 
    </div>
  )
}

export default Feed
