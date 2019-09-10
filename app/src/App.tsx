import React from 'react'
import Main from './components/Main'
import Menu from './components/Menu'
import ProfileModal from './components/ProfileModal'
import EulaModal from './components/EulaModal'
import ManageModal from './components/ManageModal'
import ReportModal from './components/ReportModal'
import PortModal from './components/PortModal'
import SettingsModal from './components/SettingsModal'
import Loading from './components/Loading'
import './App.css'

const App = () => {
  return (
    <div className="App">
      {/* <div></div> */}
      <Main />
      <Menu />
      {/* <ProfileModal profile={{
        name: 'Hoge',
        folder: '/path/to/server',
        jar: '/path/to/server/minecraft_server.jar',
        max_memory: 1024,
        min_memory: 512,
        upnp: true,
        backup: true,
        backup_minute: '10',
        backup_count: '5'
      }} /> */}
      <EulaModal />
      <ManageModal />
      <ReportModal />
      <PortModal />
      <SettingsModal />
      <button id="copy_player"></button>
      <Loading />
    </div>
  )
}

export default App
