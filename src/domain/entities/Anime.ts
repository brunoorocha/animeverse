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
  }
}