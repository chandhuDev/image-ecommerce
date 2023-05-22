import design from '../assests/3d.webp'
import travel from '../assests/travel.webp'
import animal from '../assests/animal.jpg'
import nature from '../assests/nature.jpg'
import experimental from '../assests/experimental.webp'
import wallpaper from '../assests/wallpaper.jpg'
import fashion from '../assests/fashion.jpg'
import street from '../assests/street.jpg'
import textures from '../assests/textures.webp'

import React from "react";
const AppContext = React.createContext(null);
export default AppContext

const userData=localStorage.getItem("userData")
export const user = userData&&JSON.parse(userData)

export const userImage=user?.profileImage

export const categories = [
    {
      name: 'Wallpapers',
      image: wallpaper,
    },
    {
      name: 'Travel',
      image: travel,
    },
    {
      name: 'Nature',
      image: nature,
    },
    {
      name: 'Animals',
      image: animal,
    },
    {
      name: 'Experimental',
      image: experimental,
    },
    {
      name: '3d-Renders',
      image: design,
    },
    {
      name: 'Textures-Patterns',
      image: textures,
    },
    {
      name: 'Street-Photography',
      image: street,
    }, 
    {
      name: 'Fashion-Beauty',
      image: fashion,
    },
];