import React,{useCallback, useState} from 'react'
import ChildComp from './ChildComp';

const OptUseCallback = () => {
    const [Add,setAdd]=useState(0);
    // const multi=()=>{
    //     console.log("hlw guys... I am multiple");
    // }
    const memozi=useCallback(function multi(){
        console.log('hey guys I am multiple')
    },[])
  return (
    <div>OptUseCallback
        <div>
            <ChildComp mulfun={memozi} sval={Add}/>
            <h1>{Add}</h1>
            <button onClick={()=>setAdd(Add+1)}>Increment!</button>
        </div>
        </div>
  )
}

export default OptUseCallback