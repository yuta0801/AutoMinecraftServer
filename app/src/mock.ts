import { dummyStartingLogs, dummyStoppingLogs } from './dummy'
import { Server, Logs } from './types'

type PartialServer = Partial<Server> & Pick<Server, 'id'>

export const socket = {
  callback: (server: PartialServer) => {},
  emit(server: PartialServer) {
    this.callback(server)
  },
  on(callback: (server: PartialServer) => void) {
    this.callback = callback
  },
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const _logs: Record<string, Logs> = {}

export const startServer = async (id: string) => {
  socket.emit({ id, status: 'starting' })

  _logs[id] = []
  for (const log of dummyStartingLogs) {
    _logs[id].push(log)
    socket.emit({
      id,
      log: _logs[id],
      startedAt: new Date(),
      noplayerAt: new Date(),
    })
    await sleep(100)
  }

  socket.emit({ id, status: 'running' })
}

export const stopServer = async (id: string) => {
  socket.emit({ id, status: 'stopping' })

  for (const log of dummyStoppingLogs) {
    _logs[id].push(log)
    socket.emit({ id, log: _logs[id] })
    await sleep(100)
  }

  socket.emit({
    id,
    status: 'stopped',
    startedAt: undefined,
    noplayerAt: undefined,
  })
}

export const restartServer = async (id: string) => {
  await stopServer(id)
  startServer(id)
}

export const killServer = async (id: string) => {
  socket.emit({
    id,
    status: 'stopped',
    startedAt: undefined,
    noplayerAt: undefined,
  })
}
