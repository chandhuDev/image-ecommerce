import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {Navbar,Feed,Search,PinDetails,CreatePin} from './index'



const Pins = ({user}) => {
  const [search,setSearch]=useState('')

  return (
    <div className='px-2'>
      <div className=''>
         <Navbar search={search} setSearch={setSearch} user={user&&user}/>
      </div>
      <div className='h-full'>
          <Routes>
            <Route path='/' element={<Feed search={search}/>}/>
            <Route path="/:categoryId" element={<Feed />} />
            <Route path='/pinDetail/:id' element={<PinDetails />}/>
             <Route path='/createPin' element={<CreatePin />}/> 
            <Route path='/search/:categoryId' element={<Feed />}/>
          </Routes>
      </div>
    </div>
  )
}

export default Pins
