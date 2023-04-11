import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'
import qs from 'qs'

const Feed = () => {
    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState(null)
    const {category}=useParams()
    
const query = qs.stringify(
  {
    populate: {
       likes : true ,
       section : true,
       comments: {
        populate : {
          Comment : true,
          userlist : {
            populate:{
              email : true,
              username : true
            }
          }
        }
       },
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


const getTheData=()=>{
  //const categoryValue=category.toLowerCase()
  const placeHolderValue=category ? '': 'wallpapers'
     fetch(`http://localhost:1337/api/posts?${query}`)
          .then(response => response.json())
          .then(ImagesList => {
            //console.log(ImagesList)
            localStorage.setItem("imagesList",JSON.stringify(ImagesList))
            setImageData(ImagesList)
          })
         .catch(error => {
          console.error('Error fetching data:', error);
          });
  }

useEffect(()=>{
  getTheData()
  setLoading(false)
},[])

useEffect(()=>{
  console.log(imageData)
},[imageData])

return (
    <div className='flex flex-col items-center w-full '>
     { !imageData ?<Spinner message={'We need to load the content , wait for it'}/>:
      <MasonaryLayout imageDetails={imageData}/>
     } 
    </div>
  )
}

export default Feed
