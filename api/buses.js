import { BUZZ_URL } from '../constants/urls'

export const fetchBuses = () =>
  fetch(`${BUZZ_URL}/routes/onlinebuses/5ba7e898ab9162db93692444`)
    .then(response => response.json())

