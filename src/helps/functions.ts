import moment, { MomentInput } from 'moment'
/**
 * Function to return the total number of days
 * @param checkinDate
 * @param checkoutDate
 * @returns
 */
async function getTotalDays (checkinDate: Date, checkoutDate: Date) {
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime()
  const dayDiff = timeDiff / (1000 * 3600 * 24)
  return dayDiff
}
/**
 * Function to return the total number of working weekdays from a start date to an end date
 * @param checkinDate
 * @param checkoutDate
 * @returns
 */
async function getWeekdayCount (checkinDate: MomentInput, checkoutDate: MomentInput) {
  /* eslint-disable no-unmodified-loop-condition */
  if (checkinDate !== '' && checkoutDate !== '') {
    let currentDate = moment(checkinDate)
    const endDate = moment(checkoutDate)

    let weekdays = 0
    while (currentDate <= endDate) {
      if (currentDate.day() !== 0 && currentDate.day() !== 6) {
        weekdays++
      }
      currentDate = currentDate.add(1, 'day')
    }
    return weekdays
  }
  return 0
  /* eslint-enable no-unmodified-loop-condition */
}
/**
 * Function to return the total number of days on weekends from a start date to an end date
 * @param checkinDate
 * @param checkoutDate
 * @returns
 */
async function getWeekendCount (checkinDate: MomentInput, checkoutDate: MomentInput) {
  /* eslint-disable no-unmodified-loop-condition */
  if (checkinDate !== '' && checkoutDate !== '') {
    let currentDate = moment(checkinDate)
    const endDate = moment(checkoutDate)

    let weekdays = 0
    while (currentDate <= endDate) {
      if (currentDate.day() === 0 || currentDate.day() === 6) {
        weekdays++
      }
      currentDate = currentDate.add(1, 'day')
    }
    return weekdays
  }
  return 0
  /* eslint-enable no-unmodified-loop-condition */
}

export default {
  getTotalDays,
  getWeekdayCount,
  getWeekendCount
}
