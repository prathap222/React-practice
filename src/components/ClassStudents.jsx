import React, { useContext, useReducer } from 'react';
import { studentContext } from '../App';

const initialCount = 0;
const reducer = (state, action) => {
  switch(action){
    case 'INCREMENT':
      return state + 1

      case 'DECREMENT':
        return state -1

        default:
          return state;
  }
}

export const ClassStudents = () => {

  const [state, dispatch] = useReducer(reducer, initialCount)

  return (
    <div>
      <h1>
       {state}
      </h1>
      <button onClick={()=> dispatch("INCREMENT") }>INCREMENT</button>
      <button onClick={()=> dispatch("DECREMENT") }>DECREMENT</button>
      </div>
  )
}
