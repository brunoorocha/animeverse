export enum Season {
  WINTER = 'WINTER',
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  FALL = 'FALL'
}

const currentSeason = (): Season => {
  const currentDate = new Date()
  return seasonForDate(currentDate)
}

const seasonForDate = (date: Date): Season => {
  const month = date.getMonth()

  if (month >= 0 && month < 3) {
    return Season.WINTER
  }

  else if (month >= 3 && month < 6) {
    return Season.SPRING
  }

  else if (month >= 6 && month < 9) {
    return Season.SUMMER
  }

  else {
    return Season.FALL
  }
}

const seasonFromRawValue = (rawValue: string): Season | null => {
  switch (rawValue) {
    case Season.WINTER:
      return Season.WINTER
    case Season.SPRING:
      return Season.SPRING
    case Season.SUMMER:
      return Season.SUMMER
    case Season.FALL:
      return Season.FALL
    default:
      return null
  }
}

export const SeasonUtils = {
  currentSeason,
  seasonForDate,
  seasonFromRawValue
}