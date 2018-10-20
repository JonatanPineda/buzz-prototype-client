import { Machine } from 'xstate'
import { 
  ROUTES_FETCH,
  ROUTES_FETCH_FULFILLED
} from '../constants/actionTypes'


const machine = Machine({
  initial: 'splashScreen',
  states: {
    splashScreen: {
      on: {
        ROUTES_FETCH: 'splashScreen.fetchingRoutes',
        ROUTES_FETCH_FULFILLED: 'busMap'
      },
      states: {
        fetchingRoutes: {}
      }
    },
    busMap: {}
  }
})

export default machine
