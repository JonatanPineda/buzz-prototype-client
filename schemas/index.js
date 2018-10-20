import { schema } from 'normalizr' 

export const bus = new schema.Entity('buses', {}, {idAttribute: '_id'})

export const stop = new schema.Entity('stops', {}, {idAttribute: '_id'})

export const route = new schema.Entity('routes', {
  buses: [bus],
  stops: [stop]
}, { idAttribute: '_id'})
