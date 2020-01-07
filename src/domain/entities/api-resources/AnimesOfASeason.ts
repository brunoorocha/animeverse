import { GQLApiResourceRequest } from "../../../services/apiResourceRequest";
import gql from 'graphql-tag'

const resource = (options: { season: string, year: number }): GQLApiResourceRequest => ({
  query: gql`
    query($season: MediaSeason, $year: Int) {
      Page(page: 1, perPage: 10) {
        media(
          season: $season,
          seasonYear: $year,
          type: ANIME,
          sort: START_DATE
        ) {
          id,
          status,
          season,
          title {
            romaji,
            english,
            native
          }
        }
      }
    }
  `,

  variables: { season: options.season, year: options.year }
})

export default resource