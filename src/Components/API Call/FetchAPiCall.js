import React,{useEffect,useState} from 'react'


const FetchAPiCall = () => {
    const [Data,setData]=useState("")
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {console.log(json)
    setData(json)})
      .catch((err)=>console.log("error is here",err))
  },[])
//   console.log("data is here",Data)
  return (
    <div>FetchAPiCall
        <div>
            {Data && Data.map((item,index)=>{
                return(
                    <li key={index}>{item.name}</li>
                )
            })}
        </div>
    </div>
  )
}

export default FetchAPiCall