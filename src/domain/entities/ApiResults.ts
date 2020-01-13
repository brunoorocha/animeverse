import { AnimeListElement } from './AnimeListElement'

export interface Page {
  media: AnimeListElement[]
}

export interface PaginatedApiResult {
  Page: Page
}