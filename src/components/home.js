import React, { useReducer } from 'react'
import { initialState, reducer } from '../Redux/reducer';
import { addTodo } from '../Redux/actionCreator';

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const todos = state.todos;
    console.log(todos);
  return (
    <div>
       <button onClick={() => dispatch(addTodo({text:"Hello World"}))}>Click Me</button>
    </div>
  )
}

export default Home;
