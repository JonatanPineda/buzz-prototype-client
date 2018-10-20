import { normalize } from 'normalizr'
import { doSyncEntities } from '../actions/entities'
import * as schemas from '../schemas'

const fetcher = store => next => action => {
  if(!(action.meta && action.meta.fetcher)) {
    return next(action)
  }

  next(action)

  const request = action.meta.fetcher.request

  const url = request.url
  const method = request.method || 'GET'

  const options = { method }


  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      const entity = action.meta.fetcher.entity
      const fulfilled = action.meta.fetcher.fulfilled
      const schema = schemas[entity]

      if(schema) {
        const { entities } = normalize(
          json,
          Array.isArray(json) ? [schema] : schema
        )

        store.dispatch(doSyncEntities(entities))
        store.dispatch({ ...fulfilled })
      } else {
        store.dispatch({
          ...fulfilled,
          payload: { ...action.payload, data: json }
        })
      }
  })
}

export default fetcher
