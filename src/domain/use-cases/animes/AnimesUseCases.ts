import { Anime } from '../../entities/Anime'
import { PaginatedApiResult } from '../../entities/ApiResults'
import { GraphiQLApiServiceInterface } from '../../../services/GraphiQLApiService'
import { resources } from '../../entities/api-resources/'

export interface AnimesUseCasesInterface {
  getAnimes (): Promise<Anime[]>
}

export default class AnimesUseCases implements AnimesUseCasesInterface {
  service: GraphiQLApiServiceInterface

  constructor (service: GraphiQLApiServiceInterface) {
    this.service = service
  }

  getAnimes = async (): Promise<Anime[]> => {
    const response = await this.service.request<PaginatedApiResult>(resources.AnimesOfASeason({ season: "SPRING", year: 2020 }))
    return Promise.resolve(response.data.Page.media)
  }
}