import React,{useState,useEffect} from 'react'

const HooksEx = () => {
  const[Counter,setCounter]=useState(0);
  useEffect(()=>{
    console.log("use Effect is triggered");
    return ()=>{
      console.log("Compnent unmounted here");
    }
   
},[Counter])
    
    const Increment=()=>{
      setCounter(Counter+1);
    }

  
  return (
    <div>HooksEx
        <div style={{color:'red', fontSize:'20px'}}>Counter Value: {Counter}</div>
        <div><button onClick={Increment}>Increment!!</button></div>
        <div><button onClick={()=>(setCounter(Counter-1))}>Decrement!!</button></div>
    </div>
  )
}

export default HooksEx