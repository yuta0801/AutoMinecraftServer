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

export default function App() {
  return (
    <div className="App">
      {/* <div></div> */}
      <Main />
      <Menu />
      <ProfileModal />
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
