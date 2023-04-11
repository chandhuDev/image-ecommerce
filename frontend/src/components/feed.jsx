import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'
import qs from 'qs'

const Feed = () => {
    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState(null)
    const {category}=useParams()
    
    const categoryValue=category&&category.toLowerCase()
   
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
  const url=category ? `http://localhost:1337/api/posts?filters[section][Section][$eq]=${categoryValue}&${query}`:`http://localhost:1337/api/posts?${query}`
    
        fetch(url)
          .then(response => response.json())
          .then(ImagesList => {
            console.log(ImagesList)
            const dataOfImages= ImagesList.data.map((image)=>{
              
              // let iteratedValue={}
              // const description= image.attributes.Description && image.attributes.Description
              // const imageData=image.attributes.Image.data&&image.attributes.Image.data
              // const profileUrl=image.attributes.userlist.data.attributes.profileImage.data.attributes.url && image.attributes.userlist.data.attributes.profileImage.data.attributes.url
              // const userEmail=image.attributes.userlist.data.attributes.email&&image.attributes.userlist.data.attributes.email
              // const username=image.attributes.userlist.data.attributes.username&&image.attributes.userlist.data.attributes.username
              
              //if(description&&imageData&&profileUrl&&userEmail&&username){
                //console.log(image)
                return {
                  likes : image.attributes.likes ? image.attributes.likes.data.map((like)=>{
                    return like.id
                  }) : '',
                  section : image.attributes.section.data.attributes.Section,
                  Description : image.attributes.Description ,
                  userData : {
                   userName:  image.attributes.userlist.data.attributes.username ,
                   email :  image.attributes.userlist.data.attributes.email ,
                   profileUrl : `http://localhost:1337${ image.attributes.userlist.data.attributes.profileImage.data.attributes.url}`,
                   id : image.attributes.userlist.data.id
                  },
                  id:image.id,
                  comments : image.attributes.comments? image.attributes.comments.data.map((commentData)=>{
                    return {
                      Comment: commentData.attributes.Comment,
                      user: {
                          name : commentData.attributes.userlist.data.attributes.username,
                          email : commentData.attributes.userlist.data.attributes.email
                          }
                    }
                  }) :'' ,
                  imageUrl : { 
                    id:image.attributes.Image.data.id,
                    url:`http://localhost:1337${image.attributes.Image.data.attributes.url}`
                  }}
              }
               
              //return iteratedValue
            )
            localStorage.setItem("imagesList",JSON.stringify(dataOfImages))
           // console.log("data of Images",dataOfImages)
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
