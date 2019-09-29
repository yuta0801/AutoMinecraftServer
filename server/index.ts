import { ApolloServer } from 'apollo-server'

import queris from './queries'
import schemaBuilder from './schema'

!(async () => {
  const schema = await schemaBuilder()

  const server = new ApolloServer({
    schema,
    playground: {
      tabs: queris.map(query => ({
        query,
        name: query.match(/(?:query|mutation)\s+(\w+)/)[1],
        endpoint: 'https://ams-dev.yuta0801.now.sh/'
      })),
    },
    introspection: true,
  })

  const { url } = await server.listen(4000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
})()
