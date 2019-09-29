import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import SettingsResolver from './Settings'
import ProfileResolver from './Profiles'
import ServerResolver from './Servers'

export default () => buildSchema({
  resolvers: [
    SettingsResolver,
    ProfileResolver,
    ServerResolver,
  ],
})
