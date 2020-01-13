import { GQLApiResourceRequest } from "../../../services/apiResourceRequest";
import gql from 'graphql-tag'

const resource = (options: { season: string, year: number }): GQLApiResourceRequest => ({
  query: gql`
    query($season: MediaSeason, $year: Int) {
      Page(page: 1) {
        media(
          season: $season,
          seasonYear: $year,
          type: ANIME,
          sort: START_DATE,
          isAdult: false,
        ) {
          id,
          coverImage {
            large
          },
          title {
            romaji,
            english
          }
        }
      }
    }
  `,

  variables: { season: options.season, year: options.year }
})

export default resource