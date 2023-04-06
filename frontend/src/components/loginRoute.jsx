import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import video from '../assests/share.mp4'
import logo from '../assests/logo.png'
import jwt_decode from 'jwt-decode'
import { GoogleOAuthProvider } from '@react-oauth/google';
import image from '../assests/user.png'
import axios from 'axios';

const LoginRoute = () => {
    const navigate=useNavigate()
    const onSuccess=(response) => {
     const userObject = jwt_decode(response.credential);
     console.log(userObject)
     let formData = new FormData();
     formData.append("files",userObject.picture)
     const userData={
        email:'user@strapi.io',
        username:'strapiUser',
        // profileImage: 'https://lh3.googleusercontent.com/a/AGNmyxa6piXggmvSONaByswwDv5QJNdUGOvcG2XPOyO2=s96-c'
      }
     pushUserData(formData)
    localStorage.setItem('user', JSON.stringify(userData));
     if(localStorage.getItem('user')){
      navigate('/')
     }
}


const pushUserData =  ({formData}) => {
  


    axios.post("http://localhost:1337/upload", formData)
    .then((response)=>{

      
      const imageId = response.data[0].id
      const userData={
        email:'user@strapi.io',
        username:'strapiUser',
        profileImage:imageId
        // profileImage: 'https://lh3.googleusercontent.com/a/AGNmyxa6piXggmvSONaByswwDv5QJNdUGOvcG2XPOyO2=s96-c'
      }

      axios.post("http://localhost:1337/api/userlists",{data:userData}).then((response)=>{
        //handle success
        console.log('Update successful:', response.data);
        localStorage.setItem('userData', JSON.stringify(response.data));
        return

      }).catch((error)=>{
          //handle error
          console.error('Error posting the data:', error.message);
        })
    }).catch((error)=>{
        //handle error
        console.error('Error uploading the file:', error.message);
    })

  //   const response = await fetch(`http://localhost:1337/api/userlists`, {
  //     method: 'POST', // Use 'PATCH' if you want to partially update fields
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       // Add your authorization header if needed (e.g., JWT token)
  //       // 'Authorization': 'Bearer your-token'
  //     },
  //     body: JSON.stringify(userData),
  //   });

  //   const updatedPost = await response.json();

  //   if (!response.ok) {
  //     throw new Error(updatedPost.message);
  //   }

  //   console.log('Update successful:', updatedPost);
  //   localStorage.setItem('userData', JSON.stringify(updatedPost));
  //   return 
  // } catch (error) {
  //   console.error('Error updating data:', error.message);
  // }
};

const onFailure=credentialResponse => {
  console.log(credentialResponse)
}

  return (
    <div className='h-screen'>
     <div className="relative w-full h-full" >
       <video src={video}  autoPlay muted loop controls={false}
       className="w-full h-full object-cover" 
       />
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-blackOverlay" >
          <div className='p-2 bg-slate-200 rounded-full'>
               <img src={logo} alt="shareme-logo"  width="100px"/>
               
          </div>
          <div className='mt-4 '>
              
              {/* <GoogleLogin
                 clientId='299897974338-qsr5n0u8pg24k8tpqqp72qrvt7ev12uo.apps.googleusercontent.com'
                 render={(renderprops)=>(
                
                    <button 
                    className='bg-gradient rounded-xl flex items-center gap-1 p-3 cursor-pointer'
                    onClick={renderprops.onClick} disabled={renderprops.disabled}
                    >
                      <FcGoogle className='mr-1 '/>
                      <span className='font-medium text-amber-50'>Login with Google</span>
                    </button>
                  )}
                onSuccess={success}
                onFailure={failure}
                cookiePolicy={'single_host_origin'} 
             /> */}
              
              {/* <GoogleLogin
                 onSuccess={onSuccess}
                 onError={onFailure}
                 type='icon'
                 theme='filled_blue'
                 text='signin'
                 size='large'
                 shape='pill'
                 width='200px'
                 
                 /> */}
              
              <GoogleOAuthProvider 
                clientId='299897974338-qsr5n0u8pg24k8tpqqp72qrvt7ev12uo.apps.googleusercontent.com'
                >
             <GoogleLogin
                 onSuccess={onSuccess}
                 onError={onFailure}
                 type='icon'
                 theme='filled_blue'
                 text='signin'
                 size='large'
                 shape='pill'
                 width='200px'
                />
            </GoogleOAuthProvider>
          </div>
      </div>
      </div> 
    </div>
  )
}

export default LoginRoute
