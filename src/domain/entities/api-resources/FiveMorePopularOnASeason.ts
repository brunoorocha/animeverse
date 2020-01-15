import gql from 'graphql-tag'
import { GQLApiResourceRequest } from '../../../services/apiResourceRequest'

const FiveMorePopularOnASeason = (options: { season: string, year: number }): GQLApiResourceRequest => ({
  query: gql`
    query($season: MediaSeason, $year: Int) {
      Page(page: 1, perPage: 5) {
        media(
          season: $season,
          seasonYear: $year,
          type: ANIME,
          format: TV,
          sort: POPULARITY_DESC,
          isAdult: false
        ) {
          id,
          title {
            romaji
          },
          bannerImage
        }
      }
    }
  `,
  variables: { season: options.season, year: options.year }
})

export default FiveMorePopularOnASeason