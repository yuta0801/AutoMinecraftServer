import React from 'react'
import New from './New'
import News from './News'
import Servers from './Servers'
import { Server } from '../types'

interface MainProps {
  servers: Record<string, Server>
}

const Main = (props: MainProps) => {
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
        <Servers servers={props.servers} />
      </div>
    </div>
  )
}

export default Main
