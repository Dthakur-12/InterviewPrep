import React,{useContext} from 'react'
import { Data } from './ComponentA'

const ComponentD = () => {
    const data=useContext(Data);
    console.log(data);
  return (
    <div>ComponentD
        <h1>Ok!! Finally we have our Data:{data}</h1>
    </div>
  )
}

export default ComponentD