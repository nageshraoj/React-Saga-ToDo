import { call, put, take } from 'redux-saga/effects'
import axios from 'axios'
import { reloadTodos } from '../actions/todoActions'
const todoDBUrl = 'http://localhost:3004/intialTodos'

export function* getInitialTodos() {
  const { data } = yield call(axios.get, ' http://localhost:3004/intialTodos')
  yield put(reloadTodos(data))
}

export function* addNewTodo() {
  const data = yield take('ADD_TODOS')
  const options = {
    method: 'post',
    url: todoDBUrl,
    data: data.payload,
  }
  yield call(axios, options)
}

export function* editTodo() {
  while (1) {
    const { payload } = yield take('EDIT_TODOS')
    const options = {
      method: 'put',
      url: todoDBUrl + `/${payload.id}`,
      data: payload,
    }
    yield call(axios, options)
  }
}


export function* deleteTodo() {
  while (1) {
    const { payload } = yield take('REMOVE_TODOS')
    const options = {
      method: 'delete',
      url: todoDBUrl + `/${payload.todo.id}`,
    }
    yield call(axios, options)
  }
}
