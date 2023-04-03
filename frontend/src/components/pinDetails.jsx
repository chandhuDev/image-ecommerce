import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

const PinDetails=()=>{
  const {id}=useParams()
  const locate=useLocation()
  const data = locate.state && locate.state.detail
    
  


return (
     
        <div className='flex flex-col items-center w-full bg-orange-800'>
           
        </div>
     
    
    
)


}

export default PinDetails