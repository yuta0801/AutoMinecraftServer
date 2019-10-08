import {
  ObjectType,
  Field,
  Resolver,
  Query,
  Mutation,
  Arg,
  ID,
  registerEnumType,
} from 'type-graphql'

enum Status {
  Starting = 'STARTING',
  Running = 'RUNNING',
  Stopping = 'STOPPING',
  Stopped = 'STOPPED',
}

registerEnumType(Status, { name: 'Status' })

@ObjectType()
export class Server {
  @Field(type => ID)
  id: string

  @Field(type => [String])
  logs: string[]

  @Field(type => Status)
  status: Status
}

@Resolver()
class ServerResolver {
  data = {}

  @Query(returns => Server)
  server(@Arg('id') id: string) {
    return this.data[id]
  }

  @Mutation(returns => Server)
  startServer(@Arg('id') id: string) {
    const server = {
    }
    return this.data[id] = server
  }

  @Mutation(returns => Boolean)
  stopServer(@Arg('id') id: string) {
    return delete this.data[id]
  }

  @Mutation(returns => Boolean)
  restartServer(@Arg('id') id: string) {
    return true
  }

  @Mutation(returns => Boolean)
  killServer(@Arg('id') id: string) {
    return delete this.data[id]
  }

  @Mutation(returns => Boolean)
  execCommand(
    @Arg('id') id: string,
    @Arg('command') command: string,
  ) {
    return true
  }

  // TODO: logs, indices, backups
}

export default ServerResolver
