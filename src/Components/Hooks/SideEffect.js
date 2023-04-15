import React,{useEffect} from 'react'

const SideEffect = () => {
    useEffect(()=>{
        console.log("use Effect is triggered");
    },[])
  return (
    <div>SideEffect</div>
  )
}

export default SideEffect