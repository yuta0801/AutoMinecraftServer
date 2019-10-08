import {
  ObjectType,
  InputType,
  Field,
  Resolver,
  FieldResolver,
  Root,
  Query,
  Mutation,
  Arg,
  ID,
  ResolverInterface,
} from 'type-graphql'
import * as util from '../util'
import { Server } from './Servers'

@ObjectType()
class Profile {
  @Field(type => ID)
  id: string

  @Field()
  name: string

  @Field()
  folder: string

  @Field()
  jar: string

  @Field()
  max_memory: number

  @Field()
  min_memory: number

  @Field()
  upnp: boolean

  @Field()
  backup: boolean

  @Field()
  backup_minute: string

  @Field()
  backup_count: string

  @Field({ nullable: true })
  server: Server
}

@InputType('ProfileInput')
class ProfileInput {
  @Field()
  name: string

  @Field()
  folder: string

  @Field()
  jar: string

  @Field()
  max_memory: number

  @Field()
  min_memory: number

  @Field()
  upnp: boolean

  @Field()
  backup: boolean

  @Field()
  backup_minute: string

  @Field()
  backup_count: string
}

@Resolver(of => Profile)
class ProfileResolver implements ResolverInterface<Profile> {
  data = {
    servers: {}
  }

  @FieldResolver()
  server(@Root() profile: Profile) {
    return this.data.servers[profile.id]
  }

  @Query(returns => Profile)
  profile(@Arg('id') id: string) {
    return this.data[id]
  }

  @Query(returns => [Profile])
  profiles() {
    return Object.values(this.data)
  }

  @Mutation(returns => Profile)
  createProfile(
    @Arg('ProfileInput') ProfileInput: ProfileInput,
  ) {
    const profile = {
      id: util.uuid(),
      ...ProfileInput
    }
    return this.data[profile.id] = profile
  }

  @Mutation(returns => Profile)
  updateProfile(
    @Arg('id') id: string,
    @Arg('profile') profile: ProfileInput,
  ) {
    const newProfile = {
      ...this.data[id],
      ...profile,
    }
    return this.data[id] = newProfile
  }

  @Mutation(returns => Boolean)
  removeProfile(@Arg('id') id: string) {
    return delete this.data[id]
  }
}

export default ProfileResolver
