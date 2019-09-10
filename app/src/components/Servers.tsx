import React, { useState } from 'react'
import { Server } from '../types'
import ServerDetail from './ServerDetail'

interface ServersProps {
  servers: {
    [id: string]: Server
  }
}

const Servers = (props: ServersProps) => {
  const serverIds = Object.keys(props.servers)
  const [currentTabId, setTab] = useState(serverIds[0])

  return (
    <>
      <ul id="detail_tab" className="nav nav-tabs" onClick={() => {/* setTimeout(resize, 1) */}}>
        {serverIds.map(id => (
          <li className={id === currentTabId ? 'active' : ''}>
            <a id={`${id}_tab`} href={`#${id}_content`} onClick={() => setTab(id)}>{props.servers[id].name}</a>
          </li>
        ))}
      </ul>
      <div id="detail_content" className="tab-content">
        {props.servers[currentTabId] ? (
          <ServerDetail server={props.servers[currentTabId]} />
        ) : (
          <div className="noserver">
            <h1>！サーバーがありません！</h1>
            <p>サーバーを立てるには...</p>
            <p>1. 「サーバーを新たに作成する」をクリック</p>
            <p>2. 名前、minecraftのバージョンを選択</p>
            <p>3. 保存を押すと必要なファイルがダウンロードされ、「起動」をクリックでサーバーを立てられます</p>
            <br />
            <p>既存のデータや配布ワールドから読み込むには...</p>
            <p>1. 「使用するデータを選択」をクリックしてデータを選択するか、データをドラッグ&amp;ドロップ</p>
            <p>2. 使用するjarファイルがあるときは選択。ないときはminecraftのバージョンを選択</p>
            <p>3. 保存を押して、「起動」をクリックすればサーバーが立ち上がります</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Servers
