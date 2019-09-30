import { Profile, Server } from './types'

const dummyLogs = [
  ['00:00:00', 'Info', 'Starting minecraft server version 1.12'],
  ['00:00:00', 'Info', 'Loading properties'],
  ['00:00:00', 'Info', 'server.properties does not exist'],
  ['00:00:00', 'Info', 'Generating new properties file'],
  ['00:00:00', 'Info', 'Failed to load eula.txt'],
  ['00:00:00', 'Info', 'You need to agree to the EULA in order to run the server. Go to eula.txt for more info.'],
  ['00:00:00', 'Info', 'Stopping server'],
  ['00:00:00', 'Info', 'Stopping server'],
]

const dummyProfile: Profile = {
  name: 'Hoge',
  folder: '/path/to/server',
  jar: '/path/to/server/minecraft_server.jar',
  max_memory: 1024,
  min_memory: 512,
  upnp: true,
  backup: true,
  backup_minute: '10',
  backup_count: '5'
}

export const dummyServers: Record<string, Server> = {
  a: { id: 'a', name: 'hoge', status: 'stopped', log: dummyLogs, profile: dummyProfile },
  b: { id: 'b', name: 'fuga', status: 'running', log: dummyLogs, profile: dummyProfile },
}

export const dummyLogFiles = [
  '2000-01-01-1.log.gz',
  'latest.log',
]

export const dummyBuckups = [
  '2000-01-01_00-20-00',
  '2000-01-01_00-10-00',
  '2000-01-01_00-00-00',
]
