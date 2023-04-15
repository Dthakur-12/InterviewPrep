import React,{useState} from 'react'

const HocComponent = (WrappedComponent) => {
    function Hocfunction(){
        const [Counter,setCounter]=useState(0)
    const handleClick=()=>{
        setCounter(Counter+1)
    }
    return(
        <div>
            <WrappedComponent Counter={Counter} updateCounter={handleClick} />
        </div>
    )
    }
  return Hocfunction
}

export default HocComponent