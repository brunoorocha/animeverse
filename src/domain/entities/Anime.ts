export interface Anime {
  id: number
  title: AnimeTitle
  status: string, 
}

export interface AnimeTitle {
  romaji: string
  english: string
  native: string
}