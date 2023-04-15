import React,{createContext} from 'react'
import ComponentB from './ComponentB'

const Data=createContext();

const ComponentA = () => {
    const name='Durgesh'
  return (
    <div>ComponentA:{name}
        <Data.Provider value={name}>
        <ComponentB />
        </Data.Provider>
    </div>
  )
}

export default ComponentA;
export {Data}