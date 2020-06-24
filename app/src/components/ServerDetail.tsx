import React, { useState } from 'react'
import { Server } from '../types'
import ServerLog from './ServerLog'
import ManageModal from './ManageModal'
import ProfileModal from './ProfileModal'
import EulaModal from './EulaModal'
import RelativeTime from './atoms/RelativeTime'
import Popover from './atoms/Popover'
import { startServer, stopServer, killServer, restartServer } from '../mock'

interface ServerDetailProps {
  server: Server,
  handleOpenDirectry?(): void,
  handleRemoveProfile?(): void,
}

const STATUS = {
  starting: '起動中...',
  running: '稼働中',
  stopping: '停止中...',
  stopped: '停止',
}

const formatTime = (date?: Date) => {
  if (!date) return '----/--/-- --:--:--'
  const yr = date.getFullYear()
  const mon = date.getMonth() + 1
  const d = date.getDate()
  const hr = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  return `${yr}/${mon}/${d} ${hr}:${min}:${sec}`
}

const ServerDetail = (props: ServerDetailProps) => {
  const { server } = props

  const popupTargetRef = React.createRef<HTMLAnchorElement>()
  const [showPortPopup, togglePortPopup] = useState(false)
  const [showManageModal, toggleManageModal] = useState(false)
  const [showProfileModal, toggleProfileModal] = useState(false)

  return (
    <div className="tab-pane active" style={{ marginTop: '4px' }}>
      <div id="row">
        <div className="col-xs-5 s-pad">
          <p>ステータス：{STATUS[server.status]}</p>
          <p style={{ overflowX: 'hidden' }}>開始時刻：{formatTime(server.startedAt)}</p>
          <p style={{ width: '50%', float: 'right' }}>無人時間：<RelativeTime date={server.noplayerAt} /></p>
          <p>経過時間：<RelativeTime date={server.startedAt} /></p>
          <p>次回予定：</p>
          <a onClick={() => togglePortPopup(true)} ref={popupTargetRef} style={{ width: '120%', cursor: 'pointer' }}>ポート：閉鎖</a>
          { showPortPopup && (
            <Popover title="ポート開放" target={popupTargetRef} hide={() => togglePortPopup(false)}>
              <>
                <p>ポート番号: {props.server.port && props.server.port.port}</p>
                <p>ローカルメインIP: {props.server.port && props.server.port.local_ip}</p>
                <p>ゲートウェイIP: {props.server.port && props.server.port.gateway_ip}</p>
                <p>グローバルIP: {props.server.port && props.server.port.global_ip}</p>
                <p>外部疎通チェック: {props.server.port && props.server.port.check}</p>
              </>
            </Popover>
          ) }
          <div className="players">
          </div>
        </div>
        <div className="col-sm-7" style={{ maxWidth: '400px', float: 'right', padding: '0' }} data-id={`${server.id}`}>
          <button className="btn btn-primary btn-block bt-one" onClick={props.handleOpenDirectry}>作業フォルダーを開く</button>
          <button className="btn btn-primary btn-block bt-one" onClick={() => toggleManageModal(true)}>サーバー/ログ/コマンド履歴/バックアップの管理</button>
          { showManageModal && <ManageModal handleClose={() => toggleManageModal(false)} /> }
          <button className="btn btn-warning bt-two" onClick={() => toggleProfileModal(true)} disabled={server.status !== 'stopped'}>プロファイルの編集</button>
          { showProfileModal && <ProfileModal profile={server.profile} handleClose={() => toggleProfileModal(false)} handleSave={() => {}} /> }
          <button className="btn btn-danger bt-two" onClick={props.handleRemoveProfile} disabled={server.status !== 'stopped'}>プロファイルの削除</button>
          <button className="btn btn-info pull-right bt-four" onClick={() => restartServer(server.id)} disabled={server.status !== 'running'}>再起動</button>
          <button className="btn btn-danger pull-right bt-four" onClick={() => stopServer(server.id)} disabled={server.status !== 'running'}>停止</button>
          <button className="btn btn-success pull-right bt-four" onClick={() => startServer(server.id)} disabled={server.status !== 'stopped'}>起動</button>
          <button className="btn btn-danger pull-right bt-four" onClick={() => killServer(server.id)}>強制終了</button>
        </div>
      </div>
      <ServerLog logs={server.log} />
      <input type="text" disabled={server.status !== 'running'} className="form-control input-sm" placeholder="コマンドを入力..." value="過去ログを表示しています" style={{ display: 'inline-block', width: '89%', margin: '0 0.5%' }} />
      <button disabled={server.status !== 'running'} className="btn btn-primary" style={{ margin: '0 0.5%', width: '9%', padding: '1px', height: '24px' }}>送信</button>
      <EulaModal />
    </div>
  )
}

export default ServerDetail
