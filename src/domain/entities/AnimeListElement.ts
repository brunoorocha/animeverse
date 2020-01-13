export interface AnimeListElement {
  id: number
  title: {
    romaji: string,
    english: string
  }
  coverImage: {
    large: string
  }
}