import { Anime } from '../../entities/Anime'
import ApolloClient, { gql } from 'apollo-boost'

export interface AnimesUseCasesInterface {
  getAnimes (): Promise<Anime[]>
}

const GET_ANIMES = gql`
query {
  Page(page: 1, perPage: 10) {
    media(
      season: WINTER,
      seasonYear: 2020,
      type: ANIME,
      sort: START_DATE
    ) {
      id,
      status,
      title {
        romaji,
      	english,
        native
      }
    }
  }
}

`

class AnimesUseCases implements AnimesUseCasesInterface {
  async getAnimes(): Promise<Anime[]> {
    try {
      const client = new ApolloClient({
        uri: 'https://graphql.anilist.co'
      })
  
      const response = await client.query({
        query: GET_ANIMES
      })
  
      return Promise.resolve(response.data.Page.media as Anime[])
    }
    catch (error) {
      console.log(error)
      return Promise.resolve([])
    }
  }
}

export default new AnimesUseCases()