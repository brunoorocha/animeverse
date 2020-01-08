import apolloClient from './apolloClient'
import { GQLApiResourceRequest } from './apiResourceRequest'
import { ApolloQueryResult } from 'apollo-client'

export interface GraphiQLApiServiceInterface {
  request<T> (resource: GQLApiResourceRequest): Promise<ApolloQueryResult<T>>
}

class GraphiQLApiService implements GraphiQLApiServiceInterface {
  static readonly instance = new GraphiQLApiService()

  private constructor () {}

  async request<T> (resource: GQLApiResourceRequest): Promise<ApolloQueryResult<T>> {
    return await apolloClient.query<T>({
      query: resource.query,
      variables: resource.variables
    })
  }
}

export const graphiQLApiService = GraphiQLApiService.instance