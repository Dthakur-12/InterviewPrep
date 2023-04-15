import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  // const name="PrepByte"
  const navigate=useNavigate();
  const HandleNavigate=()=>{
    navigate("/pageC",{state:{"Data":"Durgesh"}})
  }
  return (
    <div>Home
     <div><Link to="/pageA">Click here to go to:A</Link></div>  
     <div><Link to="/pageB">Click here to go to:B</Link></div>  
     <div><Link to="/page">Click here to go to:C</Link></div>  
     <div><Link to="/User/Durgesh">Click here to go Durgesh</Link></div>  
     <div><Link to="/User/Shivam">Click here to go Shivam</Link></div>  
     <button onClick={HandleNavigate}>CLICKME</button>
    </div>
  )
}

export default Home