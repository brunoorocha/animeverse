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
          format: TV,
          sort: POPULARITY_DESC,
          isAdult: false
        ) {
          id,
          title {
            romaji,
            english
          },
          coverImage {
            large
          },
          studios {
            nodes {
              id,
              name
            }
          }
        }
      }
    }
  `,

  variables: { season: options.season, year: options.year }
})

export default resource