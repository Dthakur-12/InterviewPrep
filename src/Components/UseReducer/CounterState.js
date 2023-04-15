import React,{useState} from 'react'

const CounterState = () => {
    const [Counter,setCounter]=useState(0)
  return (
    <div>CounterState: <h1>{Counter}</h1>
    <button onClick={()=>setCounter(Counter+1)}>Increment!!</button>
    <button onClick={()=>setCounter(Counter-1)}>Decrement!!</button>
    </div>
  )
}

export default CounterState