import { Anime } from './Anime'

export interface Page {
  media: Anime[]
}

export interface PaginatedApiResult {
  Page: Page
}