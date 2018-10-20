import { ENTITIES_SYNC } from '../constants/actionTypes'
import merge from 'lodash/fp/merge'

const INITIAL_STATE = {
  routes: {},
  buses: {},
  stops: {}
}

const applySyncEntities = (state, action) =>  {

  return merge(state, action.payload.entities)
}

function entitiesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ENTITIES_SYNC:
      return applySyncEntities(state, action)
    default:
      return state
  }
}

export default entitiesReducer
