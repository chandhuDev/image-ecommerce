import React, { useEffect, useState } from 'react';
import {  useLocation, useParams,useNavigate} from "react-router-dom";



const LoginRedirect = () => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function googleLogin(){
      try{
        const [response1,response2]=await Promise.all([
          fetch(`http://localhost:1337/api/auth/google/callback${location.search}`),
          fetch(`https://www.googleapis.com/oauth2/v3/userinfo${location.search}`)
         ])
         const data1 = await response1.json();
         const data2 = await response2.json();
         localStorage.setItem('jwt', data1.jwt);
         localStorage.setItem('user', JSON.stringify(data1.user));
         localStorage.setItem('googlePicture', data2.picture);
         navigate("/")
      }catch(err){
          console.log(err);
          setText('An error occurred, please see the developer console.')
        }
    }
    googleLogin()
  }, [location.search]);

  return <p>{text}</p>
};

export default LoginRedirect;