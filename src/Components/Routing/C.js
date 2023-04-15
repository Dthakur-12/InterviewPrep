import React from 'react'
import { useLocation } from 'react-router-dom'




const C = () => {
  const location=useLocation();
  console.log(location);
 
  
  return (
    <div>C
      {location.state.Data}
    </div>
  )
}

export default C