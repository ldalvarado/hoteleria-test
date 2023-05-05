import { defineStore } from 'pinia'
import functions from '@/helps/functions'
import data from '@/helps/data'
import { Hotel } from '@/models/hotels'
import moment from 'moment'

/**
 * Store that will be used to calculate all the processes of the dates and the type of client
 */

export const useHotelStore = defineStore({
  id: 'hotel',
  state: () => ({
    formData: {
      startDate: '',
      endDate: '',
      clientType: 'regular'
    },
    cheapestHotel: {
      hotelName: '',
      rate: 0,
      hotelRating: 0
    },
    list: <Hotel[]> []
  }),
  actions: {
    /**
     * Make a promise return type that returns a certain time
     * @returns
     */
    async fetchHotels () {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.list = data
          resolve(data)
        }, 3000)
      })
    },
    /**
     * Function that first calculates the list of hotels available on the dates and then calculates the price to evaluate if it is equal to another with the amount of rating
     * @returns
     */
    async findCheapestHotel () {
      this.cheapestHotel = {
        hotelName: '',
        rate: 0,
        hotelRating: 0
      }
      if (this.formData.startDate && this.formData.endDate) {
        if (moment(this.formData.startDate) >= moment(this.formData.endDate)) {
          return this.cheapestHotel
        }

        const startDate = this.formData.startDate
        const endDate = this.formData.endDate

        const checkinDate = moment(this.formData.startDate)
        const checkoutDate = moment(this.formData.endDate)

        const availableHotels = this.list.filter(hotel => {
          let isAvailable = true
          let from = moment(checkinDate)
          /* eslint-disable no-unmodified-loop-condition */
          while (from <= checkoutDate) {
            const weekday = from.day()
            if ((weekday === 0 || weekday === 6) && hotel.rates.regular.weekend === 0 && hotel.rates.rewards.weekend === 0) {
              isAvailable = false
              break
            }
            if ((weekday >= 1 && weekday <= 5) && hotel.rates.regular.weekday === 0 && hotel.rates.rewards.weekday === 0) {
              isAvailable = false
              break
            }
            from = from.add(1, 'days')
          }
          /* eslint-enable no-unmodified-loop-condition */
          return isAvailable
        })

        let cheapestRate = 0
        let highestRating = 0

        availableHotels.forEach(async (hotel) => {
          const totalDayCount = await functions.getWeekdayCount(startDate, endDate)
          const totalEndCount = await functions.getWeekendCount(startDate, endDate)

          let rate = 0
          if (this.formData.clientType === 'regular') {
            rate += hotel.rates.regular.weekday * totalDayCount
            rate += hotel.rates.regular.weekend * totalEndCount
          } else {
            rate += hotel.rates.rewards.weekday * totalDayCount
            rate += hotel.rates.rewards.weekend * totalEndCount

            console.log(startDate)
          }
          if (cheapestRate === 0 || rate < cheapestRate) {
            cheapestRate = rate
            highestRating = hotel.hotelRating

            this.cheapestHotel.hotelName = hotel.hotelName
            this.cheapestHotel.hotelRating = hotel.hotelRating
            this.cheapestHotel.rate = rate
          } else if (rate === cheapestRate && hotel.hotelRating > highestRating) {
            highestRating = hotel.hotelRating

            this.cheapestHotel.hotelName = hotel.hotelName
            this.cheapestHotel.hotelRating = hotel.hotelRating
            this.cheapestHotel.rate = rate
          }
        })
      }
    }
  }
})
