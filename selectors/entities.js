import { denormalize } from 'normalizr'
import * as schemas from '../schemas'


export const INITIAL_STATE = {}

export const getEntity = (state = INITIAL_STATE, entity) => state[entity] || {}

export const getEntityKeys = (state, entity) => Object.keys(getEntity(state, entity))

export const getDetail = (state = initialState, entity, id) => 
  getEntity(state, entity)[id]

export const getList = (state = initialState, entity, ids) =>
  (ids || getEntityKeys(state, entity)).map(id => getDetail(state, entity, id))


export const getDenormalizedDetail = (state = initialState, entity, id) =>
  denormalize(id, schemas[entity], state)

export const getDenormalizedList = (state = initialState, entity, ids) =>
  denormalize(ids || getEntityKeys(state, entity), [schemas[entity]], state)


