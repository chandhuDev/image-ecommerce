import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Navbar,Feed,PinDetails,CreatePin,SearchError,UserPage} from './index'



const Pins = () => {
  return (
    <div className='px-2 ml-1 overflow-x-hidden'>
      <Navbar />
    <div className='h-full'>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/:category" element={<Feed />} />
            <Route path="/home" element={<UserPage />} />
            <Route path='/:pinId/pinDetail' element={<PinDetails />}/>
            <Route path='/createPin' element={<CreatePin />}/> 
            <Route path='/search/:category' element={<Feed />}/>
            <Route path='/search/error' element={<SearchError />}/>
          </Routes>
      </div>
    </div>
  )
}

export default Pins
