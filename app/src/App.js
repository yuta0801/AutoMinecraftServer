import React from 'react'
import Main from './components/Main.js'
import Menu from './components/Menu.js'
import ProfileModal from './components/ProfileModal.js'
import EulaModal from './components/EulaModal.js'
import ManageModal from './components/ManageModal.js'
import ReportModal from './components/ReportModal.js'
import PortModal from './components/PortModal.js'
import SettingsModal from './components/SettingsModal.js'
import Loading from './components/Loading.js'
import './App.css'

export default function App() {
  return (
    <div className="App">
      {/* <div style={{ webkitAppRegion: 'drag', height: '20px', width: '100%' }}></div> */}
      <Main />
      <Menu />
      <ProfileModal />
      <EulaModal />
      <ManageModal />
      <ReportModal />
      <PortModal />
      <SettingsModal />
      <button id="copy_player" style={{ display: 'none' }}></button>
      <div id="dpi"></div>
      <Loading />
    </div>
  )
}
