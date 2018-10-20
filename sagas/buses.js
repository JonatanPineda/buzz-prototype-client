import { BUSES_POLLING_START } from '../constants/actionTypes'
import { fetchBuses } from '../api/buses'
import { call, take, fork, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { normalize } from 'normalizr'
import { bus } from '../schemas'
import { doSyncEntities } from '../actions/entities'

function* repeatFetchBuses() {
  while(true) {
    try {
      const buses = yield call(fetchBuses)
      const normalizedBuses = normalize(buses, [bus])
      yield put(doSyncEntities(normalizedBuses.entities))
    } catch(error){
      console.log(error)
    }

    yield delay(3000)
  }
}

export function* watchStartBusesPolling() {
  yield take(BUSES_POLLING_START)
  yield fork(repeatFetchBuses)
}
