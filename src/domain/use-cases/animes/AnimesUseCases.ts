import { Anime } from '../../entities/Anime'
import { service } from '../../../services/apiService'
import { resources } from '../../entities/api-resources/'

export interface AnimesUseCasesInterface {
  getAnimes (): Promise<Anime[]>
}

class AnimesUseCases implements AnimesUseCasesInterface {
  async getAnimes(): Promise<Anime[]> {
    const response = await service.request(resources.AnimesOfASeason({ season: "SPRING", year: 2020 }))
    return Promise.resolve(response.data.Page.media as Anime[])  
  }
}

export default new AnimesUseCases()