import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    todos: [{}],
  };

export const reducer = (state,action) => {
    switch (action.type) {
        case ADD_TODO:
          {
            const newId = uuidv4();
            const newTodo = {
              id: newId,
              text: action.payload.todo.text,
            };
            return {
              todos: [...state.todos, newTodo],
            };
          }
        case UPDATE_TODO:
          {
            const idx = state.todos.findIndex(todo => todo.id === action.payload.todoId);
            const todo = Object.assign({}, state.todos[idx]);
            todo.text = action.payload.newTodo.text;
            const todos = Object.assign([], state.todos);
            todos.splice(idx, 1, todo);
            return {
              todos: todos,
            };
          }
        case DELETE_TODO:
          {
            const idx = state.todos.findIndex(todo => todo.id === action.payload.todoId);
            const todos = Object.assign([], state.todos);
            todos.splice(idx, 1);
            return {
              todos: todos,
            };
          }
        default:
          return state;
      }
}