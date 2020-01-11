const dateFromApiFormatToEnUS = (day: number, month: number, year: number): string => {
  const date = new Date()
  date.setDate(day)
  date.setMonth(month - 1)
  date.setFullYear(year)
  return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
}

const formattedEnUSNextEpisodeAiringDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
}

export default {
  dateFromApiFormatToEnUS,
  formattedEnUSNextEpisodeAiringDate
}