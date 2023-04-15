import React,{useState} from 'react'

const StateLiftinUp = (props) => {
    const [name,setName]=useState("")
    const HandleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name);
        // console.log(props);
        props.getName(name);
    }
  return (
    <div>StateLiftinUp
        <form>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={HandleSubmit}>ClickMe!</button>
        </form>
    </div>
  )
}

export default StateLiftinUp