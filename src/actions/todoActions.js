

export const getTodos = (todos) => {
    return {
        type: 'GET_TODOS',
        payload:todos
    }
}

export const reloadTodos = (todos) => {
  return {
    type: 'RELOAD_TODOS',
    payload: todos,
  }
}

export const updateTodos = (updatetype) => {
    return {
      type: 'UPDATE_TODO',
      payload: updatetype
    }
}

export const addTodos = (todo) => {
  return {
    type: 'ADD_TODOS',
    payload: todo,
  }
}

export const removeTodos = (todo) => {
  return {
    type: 'REMOVE_TODOS',
    payload: todo,
  }
}

export const editTodos = (todo) => {
  return {
    type: 'EDIT_TODOS',
    payload: todo,
  }
}
