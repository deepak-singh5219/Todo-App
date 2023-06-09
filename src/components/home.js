import React, { useReducer, useState } from 'react'
import { initialState, reducer } from '../Redux/reducer';
import { addTodo, deleteTodo, updateTodo } from '../Redux/actionCreator';
import Todo from './Todo.js';



const Home = () => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const [text,setText] = useState("");
    console.log(state.todos);

    const addNewTodo = () => {
        if(text.trim().length===0) alert("Empty todo can't be added!!!");
        dispatch(addTodo({text}));
        setText("");
    }

  return (
    <>
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <div class="flex mt-4">
                <input value={text} onChange={(e) => setText(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                <button onClick={addNewTodo} class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
        </div>
        {
            state?.todos?.map((todo,i)=> <Todo key={i} id={todo.id} text={todo.text} dispatch={dispatch}/>)
        }
        <div>
            
        </div>
    </div>
</div>
</>
  )
}

export default Home;
