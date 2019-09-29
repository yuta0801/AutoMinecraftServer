import { ApolloServer } from 'apollo-server'

import schemaBuilder from './schema'

!(async () => {
  const schema = await schemaBuilder()

  const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
  })

  const { url } = await server.listen(4000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
})()
