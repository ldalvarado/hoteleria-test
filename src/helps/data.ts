import { Hotel } from '@/models/hotels'
/**
 * Static data of the hotels
 */
const data: Array<Hotel> = [
  {
    hotelName: 'Lakewood',
    hotelRating: 3,
    rates: {
      regular: {
        weekday: 110,
        weekend: 90
      },
      rewards: {
        weekday: 80,
        weekend: 80
      }
    }
  },
  {
    hotelName: 'Bridgewood',
    hotelRating: 4,
    rates: {
      regular: {
        weekday: 160,
        weekend: 60
      },
      rewards: {
        weekday: 110,
        weekend: 50
      }
    }
  },
  {
    hotelName: 'Ridgewood',
    hotelRating: 5,
    rates: {
      regular: {
        weekday: 220,
        weekend: 150
      },
      rewards: {
        weekday: 100,
        weekend: 40
      }
    }
  }
]

export default data
