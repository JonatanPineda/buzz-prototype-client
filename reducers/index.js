import { combineReducers } from 'redux'
import machine from './machine'
import entities from './entities'

const rootReducer = combineReducers({
  entities,
  machine
})

export default rootReducer
