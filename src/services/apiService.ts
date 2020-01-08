import apolloClient from './apolloClient'
import { GQLApiResourceRequest } from './apiResourceRequest'
import { ApolloQueryResult } from 'apollo-client'

export interface ApiServiceInterface {
  request<T> (resource: GQLApiResourceRequest): Promise<ApolloQueryResult<T>>
}

class ApiService implements ApiServiceInterface {
  static readonly instance = new ApiService()

  private constructor () {}

  async request<T> (resource: GQLApiResourceRequest): Promise<ApolloQueryResult<T>> {
    return await apolloClient.query<T>({
      query: resource.query,
      variables: resource.variables
    })
  }
}

export const service = ApiService.instance