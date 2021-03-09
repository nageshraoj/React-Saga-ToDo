import * as todoSagas from './todoSagas'

export function defaultSaga(sagaMiddleware) {
  Object.values(todoSagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
