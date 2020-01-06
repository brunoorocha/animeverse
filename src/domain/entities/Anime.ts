export interface Anime {
  id: number
  title: AnimeTitle
  status: string, 
}

export interface AnimeTitle {
  romanji: string
  english: string
  native: string
}