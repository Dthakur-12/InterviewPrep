import React,{useState,useEffect} from 'react'
import axios from 'axios'

const AxiosCall = () => {
    const [Data,setData]=useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));      
    },[])
  return (
    <div>AxiosCall</div>
  )
}

export default AxiosCall