export interface Profile {
  id: string;
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

export interface Port {
  port: string
  local_ip: string
  gateway_ip: string
  global_ip: string
  check: string
}

export interface Server {
  id: string
  name: string
  status: 'starting' | 'running' | 'stopping' | 'stopped'
  log: string[][]
  profile: Profile
  port?: Port
  startedAt?: Date
  noplayerAt?: Date
}

export type Logs = [string, string, string][]
