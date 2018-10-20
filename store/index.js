import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import fetcher from '../middleware/fetcher'
import machineSynchronizer from '../middleware/machineSynchronizer'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(
      fetcher,
      machineSynchronizer,
      saga
    )
  )
)

saga.run(rootSaga)

export default store
