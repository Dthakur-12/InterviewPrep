import React from 'react'

const Ternary = () => {
    const Consistency=2;
  return (

    <div>Ternary
        <div>
            this is example of Ternary Operatore
        </div>
        {Consistency===1?<div style={{backgroundColor:'green',color:'red'}}>You will get Placed</div>:<div style={{backgroundColor:'red',color:'green'}}>Try one More time</div> }
        {/* {Consistency && <div>You are good to go!</div>}/ */}
        
        </div>
  )
}

export default Ternary