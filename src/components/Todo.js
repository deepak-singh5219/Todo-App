import React, { useReducer } from 'react'
import { initialState, reducer } from '../Redux/reducer'

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      todo
    </div>
  )
}
export default Todo;
