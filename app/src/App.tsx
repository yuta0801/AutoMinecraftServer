import React from 'react'
import Main from './components/Main'
import Menu from './components/Menu'
import Loading from './components/Loading'
import './App.css'

const App = () => {
  return (
    <div className="App">
      {/* <div></div> */}
      <Main />
      <Menu />
      <button id="copy_player"></button>
      <Loading />
    </div>
  )
}

export default App
