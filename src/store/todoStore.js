import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSageMiddleWare from 'redux-saga'
import reducer from '../reducers/todoReducer'
import {defaultSaga} from '../sagas'

const sagaMiddleware = createSageMiddleWare()
const middleware = [sagaMiddleware]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

const todoStore = () => {
  defaultSaga(sagaMiddleware)
  return store
}

export default todoStore()
