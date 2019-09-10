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
