export interface Profile {
  name: string;
  folder: string;
  jar: string;
  max_memory: number;
  min_memory: number;
  upnp: boolean;
  backup: boolean;
  backup_minute: string;
  backup_count: string;
}

export interface Server {
  id: string
  name: string
  status: 'starting' | 'running' | 'stopping' | 'stopped'
  log: string[][]
  profile: Profile
}
