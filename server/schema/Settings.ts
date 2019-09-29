import {
  ObjectType,
  InputType,
  Field,
  Resolver,
  Query,
  Mutation,
  Arg,
} from 'type-graphql'

@ObjectType()
class Settings {
  @Field()
  log_att: boolean

  @Field()
  backup_notify: boolean

  @Field()
  backup_dir_bool: boolean

  @Field()
  backup_dir: string
}

@InputType()
class SettingsInput {
  @Field()
  log_att: boolean

  @Field()
  backup_notify: boolean

  @Field()
  backup_dir_bool: boolean

  @Field()
  backup_dir: string
}

@Resolver(Settings)
class SettingsResolver {
  data = {
    log_att: true,
    backup_notify: false,
    backup_dir_bool: false,
    backup_dir: '',
  }

  @Query(returns => Settings)
  settings() {
    return this.data
  }

  @Mutation(returns => Settings)
  updateSetings(
    @Arg('settings') settings: SettingsInput,
  ) {
    this.data = settings
  }
}

export default SettingsResolver
