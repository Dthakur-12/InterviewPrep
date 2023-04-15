import React from 'react'
import './Function.css'

const FirstFunctional = (params) => {
  console.log(params.data.name);
  
  // console.log(params);
  // const name=params.data;
   
  return (
    <div className='heading'>Hello I'm from Functional Component: from child Component:
    </div>
  )
}

export default FirstFunctional