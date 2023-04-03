import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {Navbar,Feed,Search,PinDetails} from './index'



const Pins = ({user}) => {
  const [search,setSearch]=useState('')

  return (
    <div className='px-2 w-full h-full bg-orange-200'>
      <div className='w-full'>
         <Navbar search={search} setSearch={setSearch} user={user&&user}/>
      </div>
      <div className=' bg-red-500'>
          <Routes>
            <Route path='/' element={<Feed search={search}/>}/>
            <Route path="/:categoryId" element={<Feed />} />
            <Route path='/pinDetail' element={<PinDetails />}/>
            {/* <Route path='/createPin' element={<CreatePin />}/> */}
            <Route path='/search/:categoryId' element={<Feed />}/>
          </Routes>
      </div>
    </div>
  )
}

export default Pins
