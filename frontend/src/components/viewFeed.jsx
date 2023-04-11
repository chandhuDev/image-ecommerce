import React,{useState,useEffect} from 'react'
import { MasonaryLayout } from './index'
import qs from 'qs'
import {Spinner} from './index'

const query=qs.stringify(
  {
  populate:{
    posts:{
      populate:{
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
      }
    }
  },
  {
    encodeValuesOnly: true // prettify URL
  }
)




const ViewFeed = () => {
  const [showComponent1, setShowComponent1] = useState(false);
  const [userData,setUserData]=useState()
  const imagesList=localStorage.getItem('imagesList')
  const images=JSON.parse(imagesList)
  const userDatainJson=localStorage.getItem('user')
  const user=JSON.parse(userDatainJson)
  const userIdinJson=localStorage.getItem('userDataId')
  const userId=JSON.parse(userIdinJson)
  
 const handleToggle = () => {
    setShowComponent1(!showComponent1);
  };

 const resultComponent= userData ? <MasonaryLayout imageDetails={userData} />: <Spinner message={'We need to load the content , wait for it'}/>



 useEffect(()=>{
 async function fetchUserCreatedPins(){
  try{
    const response=await fetch(`http://localhost:1337/api/userlists?filters[username][$eq]=kalyan&${query}`)
    const resultData=await response.json()
    console.log(resultData)
    const dataList=resultData.data[0].attributes.posts.data.map((image)=>{
      return {
        likes : image.attributes.likes ? image.attributes.likes.data.map((like)=>{
          return like.id
        }) : '',
        section : image.attributes.section.data.attributes.Section,
        Description : image.attributes.Description ,
        userData : {
         userName:  user.name ,
         email :  user.email,
         profileUrl : user.picture,
         id : userId
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
    })

    if (!response.ok) {
      throw new Error(resultData.message);
    }
    
    setUserData(dataList)
  }
  catch(e){
    console.log("In viewfeed",e)
  }
 }
 fetchUserCreatedPins()
 },[])

 useEffect(()=>{
console.log("userData in viewfeed",userData)
 },[userData])

  return (
    <>
      <div className='w-full h-full p-3 bg-slate-400 flex flex-col items-center'>
       <div className='my-5 flex justify-center w-full'>
       
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-tl-lg rounded-bl-lg ${
            showComponent1 ? 'bg-orange-500' : 'bg-purple-500'
          }`}
        >
         Your pins
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-tr-lg rounded-br-lg ${
            !showComponent1 ? 'bg-orange-500' : 'bg-purple-500'
          }`}
        >
          Others feed
        </button>
       
      </div> 
      <div className='flex flex-col items-center w-full '>
        {!showComponent1?<MasonaryLayout imageDetails={images}/>:resultComponent}
      </div>
      </div>
    </>
  )
}

export default ViewFeed
