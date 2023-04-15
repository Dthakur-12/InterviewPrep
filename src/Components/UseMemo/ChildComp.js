import React,{memo} from 'react'

const ChildComp = ({memozi,sval}) => {
    console.log("I am from child Component")
  return (
    <div>ChildComp</div>
  )
}

export default memo(ChildComp)