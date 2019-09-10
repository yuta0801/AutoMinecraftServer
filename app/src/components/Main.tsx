import React from 'react'
import New from './New'
import News from './News'
import Servers from './Servers'

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

const dummyProfile = {
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

const dummyData = {
  a: { id: 'a', name: 'hoge', status: 'stopped', log: dummyLogs, profile: dummyProfile },
  b: { id: 'b', name: 'fuga', status: 'running', log: dummyLogs, profile: dummyProfile },
} as const

const Main = () => {
  return (
    <div id="main">
      <div id="main_left" className="col-xs-4 s-pad">
        {/* <h2>ステータス</h2>
              <table className="table table-hover">
                  <thead><tr><th data-column-id="profile" data-identifier="true">プロファイル名</th><th data-column-id="time">継続時間</th></tr></thead>
                  <tbody id="status">
                  </tbody>
              </table> */}
        <News />
        <New />
      </div>
      <div id="main_right" className="col-xs-8 s-pad">
        <Servers servers={dummyData} />
      </div>
    </div>
  )
}

export default Main
