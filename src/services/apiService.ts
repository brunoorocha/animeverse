import apolloClient from './apolloClient'
import { GQLApiResourceRequest } from './apiResourceRequest'
import ApolloClient, { ApolloQueryResult } from 'apollo-client'

export interface ApiServiceInterface {
  request (resource: GQLApiResourceRequest): Promise<ApolloQueryResult<any>>
}

class ApiService implements ApiServiceInterface {
  static readonly instance = new ApiService()

  private constructor () {}

  async request (resource: GQLApiResourceRequest): Promise<ApolloQueryResult<any>> {
    return await apolloClient.query({
      query: resource.query,
      variables: resource.variables
    })
  }
}

export const service = ApiService.instance