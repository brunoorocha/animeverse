import { GQLApiResourceRequest } from '../../../services/apiResourceRequest'
import gql from 'graphql-tag'

const resource = (id: number): GQLApiResourceRequest => ({
  query: gql`
    query($id: Int) {
      Page(page: 1, perPage: 5) {
        media(id: $id) {
          id,
          studios {
            nodes {
              id,
              name
            }
          }
          title {
            romaji,
            english,
            native
          }
        }
      }
    }
  `,
  variables: { id }
})

export default resource
