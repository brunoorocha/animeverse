export interface Anime {
  id: number
  title: {
    romaji: string,
    english: string,
    native: string
  }
  status: string,
  coverImage: {
    extraLarge: string,
    large: string,
    medium: string
  },
  startDate: {
    day: number,
    month: number,
    year: number
  },
  nextAiringEpisode?: {
    episode: number,
    airingAt: number,
    timeUntilAiring: number
  },
}