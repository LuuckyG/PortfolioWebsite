import blog from './blog/sagas'
import project from './project/sagas'

const sagas = [
  blog,
  project
]

export const initSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))
