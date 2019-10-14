import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'https://ams-dev.yuta0801.now.sh/',
})

const cache = new InMemoryCache()

export default new ApolloClient({
  link: httpLink,
  cache
})
