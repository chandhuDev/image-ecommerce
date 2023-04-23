import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {Navbar,Feed,Search,PinDetails,CreatePin} from './index'



const Pins = () => {
  const [search,setSearch]=useState('')

  return (
    <div className='px-2'>
      <div className=''>
         <Navbar search={search} setSearch={setSearch}/>
      </div>
      <div className='h-full'>
          <Routes>
            <Route path="/*" element={<Feed search={search}/>} />
            <Route path="/:id/:category" element={<Feed />} />
            <Route path='/:id/pinDetail' element={<PinDetails />}/>
             <Route path='/:id/createPin' element={<CreatePin />}/> 
            <Route path='/:id/search/:categoryId' element={<Feed />}/>
          </Routes>
      </div>
    </div>
  )
}

export default Pins
