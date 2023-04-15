import React,{useState,useMemo} from 'react'

const DemoUsememo = () => {
    const [state1,setState1]=useState(0);
    // const [state2,setState2]=useState(0);

    const Expensivefun=useMemo(()=>{
        console.log("hlw I am expensive function*************************");
    },[state1])
  return (
    <div>DemoUsememo:{state1}<br/>
        {Expensivefun}
        <button onClick={()=>setState1(state1+1)}>Incremenet1</button>
        <button onClick={()=>setState1(state1-1)}>Decerement!</button>
    </div>
  )
}

export default DemoUsememo