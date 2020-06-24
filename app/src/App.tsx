import React, { useState, useEffect } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'
import Loading from './components/Loading'
import { dummyServers } from './dummy'
import { Server } from './types'
import './App.css'
import { socket } from './mock'

const App = () => {
  const { isLoading, servers } = useApp()

  return (
    <div className="App">
      {/* <div></div> */}
      <Main servers={servers} />
      <Menu />
      <button id="copy_player"></button>
      {isLoading && <Loading />}
    </div>
  )
}

export default App

const useApp = () => {
  const [isLoading, setLoading] = useState(true)
  const [servers, setServers] = useState<Record<string, Server>>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setServers(dummyServers)
      setLoading(false)

      socket.on(server => {
        setServers(servers => ({
          ...servers,
          [server.id]: {
            ...servers[server.id],
            ...server
          }
        }))
      })
    }, 1000)
    return () => clearTimeout(timerId)
  }, [])

  return { isLoading, servers }
}
