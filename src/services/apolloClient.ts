import ApolloClient from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://graphql.anilist.co'
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
})

export default client