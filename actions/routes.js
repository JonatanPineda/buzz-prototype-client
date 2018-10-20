import { 
  ROUTES_FETCH, 
  ROUTES_FETCH_FULFILLED, 
  ROUTES_FETCH_REJECTED 
} from '../constants/actionTypes'
import { BUZZ_URL } from '../constants/urls'

export const doFetchRoutes = () => ({
  type: ROUTES_FETCH,
  meta: {
    fetcher: {
      request: { url: `${BUZZ_URL}/routes` },
      fulfilled: { type: ROUTES_FETCH_FULFILLED },
      entity: 'route'
    }
  }
})
