import React from 'react'
import {Audio ,Circles ,MagnifyingGlass} from 'react-loader-spinner'


const Spinner = ({message}) => {
 

  return (
  <div className='flex flex-col items-center'>
  <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
      <p>{message}</p>
    </div>
  )
}

export default Spinner
