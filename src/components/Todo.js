import React from 'react'
import { deleteTodo, updateTodo } from '../Redux/actionCreator';


const Todo = (props) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const {id,text,dispatch} = props;
    // console.log(id)
    const updateTodoText = () => {
      const newtext = prompt("Enter new text:");
      dispatch(updateTodo(id,{text:newtext}));
    }
  return (
    <div class="flex mb-4 mx-4 items-center">
                <p class="w-full text-grey-darkest">{text}</p>
                <button onClick={updateTodoText} class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Update</button>
                <button onClick={() => dispatch(deleteTodo(id))} class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
    </div>              
  )
}
export default Todo;
