import { ENTITIES_SYNC } from '../constants/actionTypes'

export const doSyncEntities = (entities) => ({
  type: ENTITIES_SYNC,
  payload: {
    entities
  }
})
