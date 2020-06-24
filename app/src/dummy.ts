import { Profile, Server, Logs } from './types'
import { PROFILE_DEFAULT } from './constants'

export const dummyStartingLogs: Logs = [
  ['00:00:00', 'INFO', 'Starting minecraft server version 1.12.2'],
  ['00:00:00', 'INFO', 'Loading properties'],
  ['00:00:00', 'INFO', 'Default game type: SURVIVAL'],
  ['00:00:00', 'INFO', 'Generating keypair'],
  ['00:00:00', 'INFO', 'Starting Minecraft server on *:25565'],
  ['00:00:00', 'INFO', 'Using default channel type'],
  ['00:00:00', 'INFO', 'Preparing level "world"'],
  ['00:00:00', 'INFO', 'Done (2.299s)! For help, type "help" or "?"'],
]

export const dummyStoppingLogs: Logs = [
  ['00:00:00', 'INFO', 'Stopping the server'],
  ['00:00:00', 'INFO', 'Stopping server'],
  ['00:00:00', 'INFO', 'Saving players'],
  ['00:00:00', 'INFO', 'Saving worlds'],
  ['00:00:00', 'INFO', "Saving chunks for level 'world'/overworld"],
  ['00:00:00', 'INFO', "Saving chunks for level 'world'/the_nether"],
  ['00:00:00', 'INFO', "Saving chunks for level 'world'/the_end"],
  ['00:00:00', 'INFO', 'Stopping server'],
]

const dummyProfile: Profile = {
  ...PROFILE_DEFAULT,
  id: 'c299b91a-7dba-4139-9de8-666712ec1339',
  name: 'Foo',
  folder: '/path/to/server',
  jar: '/path/to/server/minecraft_server.jar',
}

export const dummyServers: Record<string, Server> = {
  'c299b91a-7dba-4139-9de8-666712ec1339': {
    id: 'c299b91a-7dba-4139-9de8-666712ec1339',
    name: 'Foo',
    status: 'stopped',
    log: [],
    profile: dummyProfile,
  },
  'fdfeeff3-5248-4356-8c05-1253b00aedd0': {
    id: 'fdfeeff3-5248-4356-8c05-1253b00aedd0',
    name: 'Bar',
    status: 'stopped',
    log: [],
    profile: dummyProfile,
  },
}

export const dummyLogFiles = ['2000-01-01-1.log.gz', 'latest.log']

export const dummyBuckups = [
  '2000-01-01_00-20-00',
  '2000-01-01_00-10-00',
  '2000-01-01_00-00-00',
]
