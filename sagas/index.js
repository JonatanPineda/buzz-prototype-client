import { all } from 'redux-saga/effects'
import { watchStartBusesPolling } from './buses'

function* watchAll() {
  yield all([
    watchStartBusesPolling()
  ])
}

export default watchAll
