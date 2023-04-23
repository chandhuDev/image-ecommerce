import React from "react";
export const appContext = React.createContext();


const userData=localStorage.getItem("userData")
export const user = JSON.parse(userData)


export const categories = [
    {
      name: 'Wallpapers',
      image: 'http://localhost:1337/',
    },
    {
      name: 'Travel',
      image: 'http://localhost:1337/',
    },
    {
      name: 'Nature',
      image: 'http://localhost:1337/',
    },
    {
      name: 'Animals',
      image: 'http://localhost:1337/',
    },
    {
      name: 'Experimental',
      image: 'http://localhost:1337/',
    },
    {
      name: '3d-Renders',
      image: 'http://localhost:1337/',
    },
    {
      name: 'Textures-Patterns',
      image: 'http://localhost:1337/',
    },
    {
      name: 'Street-Photography',
      image: 'http://localhost:1337/',
    }, {
      name: 'Fashion-Beauty',
      image: 'http://localhost:1337/',
    },
  ];