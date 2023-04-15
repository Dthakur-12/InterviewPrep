import React, { useReducer } from 'react'



const intialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
            case "Multiplication":
                return state*5
        default:
            return state
    }


}
const CounterwithReducer = () => {
    const [Count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>CounterwithReducer : {Count}
        <br/>
            <button onClick={()=>dispatch("Increment")}>Increment!!</button>
            <button onClick={()=>dispatch("Decrement")}>Decrement!!</button>
            <button onClick={()=>dispatch("Multiplication")}>Multiplication!!</button>
        </div>
    )
}

export default CounterwithReducer