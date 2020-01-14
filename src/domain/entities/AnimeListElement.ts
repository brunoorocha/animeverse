export interface AnimeListElement {
  id: number
  title: {
    romaji: string,
    english: string
  }
  coverImage: {
    large: string
  },
  studios: {
    nodes: Studio[]
  }
}

interface Studio {
  id: number
  name: string
}