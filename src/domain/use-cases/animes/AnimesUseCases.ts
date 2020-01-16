import { AnimeListElement } from '../../entities/AnimeListElement'
import { PaginatedApiResult } from '../../entities/ApiResults'
import { GraphiQLApiServiceInterface } from '../../../services/GraphiQLApiService'
import { resources } from '../../entities/api-resources/'
import { Anime } from '../../entities/Anime'

export interface AnimesUseCasesInterface {
  getAnimeWithId (id: number): Promise<Anime>
  getAnimesOfSeason (season: string, year: number): Promise<AnimeListElement[]>
  getTheFiveMostPopularOfASeason (season: string, year: number): Promise<AnimeListElement[]>
}

export default class AnimesUseCases implements AnimesUseCasesInterface {
  service: GraphiQLApiServiceInterface

  constructor (service: GraphiQLApiServiceInterface) {
    this.service = service
  }

  getAnimeWithId = async (id: number): Promise<Anime> => {
    const response = await this.service.request<PaginatedApiResult<Anime[]>>(
      resources.AnimeWithId(id)
    )

    return response.data.Page.media[0]
  }

  getAnimesOfSeason = async (season: string, year: number): Promise<AnimeListElement[]> => {
    const response = await this.service.request<PaginatedApiResult<AnimeListElement[]>>(
      resources.AnimesOfASeason({ season, year })
    )
    return response.data.Page.media
  }

  getTheFiveMostPopularOfASeason = async (season: string, year: number): Promise<AnimeListElement[]> => {
    const response = await this.service.request<PaginatedApiResult<AnimeListElement[]>>(
      resources.FiveMorePopularOnASeason({ season, year })
    )

    return response.data.Page.media
  }
}