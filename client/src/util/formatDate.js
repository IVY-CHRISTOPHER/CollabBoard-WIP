import dayjs from 'dayjs'

//for display of month-day-year
export const formatDate = date => (
    dayjs(date).format('MM-DD-YYYY')
)

// Month spelled out and the day after 
export const MonthDayFormat = date => (
    dayjs(date).format('MMMM D')
)

// Month spelled out, day then year
export const monthDayYearFormat = date => (
    dayjs(date).format('MMMM D, YYYY')
)