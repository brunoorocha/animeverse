import { AnimeListElement } from '../../entities/AnimeListElement'
import { PaginatedApiResult } from '../../entities/ApiResults'
import { GraphiQLApiServiceInterface } from '../../../services/GraphiQLApiService'
import { resources } from '../../entities/api-resources/'

export interface AnimesUseCasesInterface {
  getAnimesOfSeason (name: string, year: number): Promise<AnimeListElement[]>
}

export default class AnimesUseCases implements AnimesUseCasesInterface {
  service: GraphiQLApiServiceInterface

  constructor (service: GraphiQLApiServiceInterface) {
    this.service = service
  }

  getAnimesOfSeason = async (name: string, year: number): Promise<AnimeListElement[]> => {
    const response = await this.service.request<PaginatedApiResult>(
      resources.AnimesOfASeason({ season: name, year: year })
    )
    return Promise.resolve(response.data.Page.media)
  }
}