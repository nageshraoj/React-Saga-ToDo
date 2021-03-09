import { combineReducers } from 'redux'


const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'RELOAD_TODOS':
      return action.payload
    case 'ADD_TODOS':
      return [...state, action.payload]
    case 'REMOVE_TODOS': 
      return state.filter(todo=>todo.id!==action.payload.todo.id)
      case 'EDIT_TODOS': 
      return state.map(todo=>todo.id===action.payload.id?action.payload:todo)
    default:
      return state
  }
}

const todoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_TODO':   
            return action.payload
        default: return state;
    }
    
}

export default combineReducers({
  todos: todoReducer,
  updateTodo: todoUpdateReducer,
})