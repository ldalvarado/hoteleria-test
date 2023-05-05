/* configuro el store */

import {
  useHotelStore
} from './modules/hotels'

const useStore = () => ({
  main: useHotelStore()
})

export default useStore
