import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Spinner = ({message}) => {
 return (
  <div className='flex flex-col items-center'>
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
