import React from 'react'
import {MagnifyingGlass} from 'react-loader-spinner'
import PuffLoader from "react-spinners/PuffLoaderr";

const Spinner = ({message}) => {
 return (
  <div className='flex flex-col items-center'>
  {/* <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/> */}
      <PuffLoader
        color="#FFA07A"
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    <p>{message}</p>
  </div>
  )
}

export default Spinner
