import React from 'react'
import { Server } from '../types'
import ServerLog from './ServerLog'

interface ServerDetailProps {
  server: Server,
  handleOpenDirectry?(): void,
  handleOpenManageModal?(): void,
  handleOpenProfileModal?(): void,
  handleRemoveProfile?(): void,
  handleRestart?(): void,
  handleStop?(): void,
  handleStart?(): void,
  handleKill?(): void,
}

const STATUS = {
  starting: '起動中...',
  running: '稼働中',
  stopping: '停止中...',
  stopped: '停止',
}

const ServerDetail = (props: ServerDetailProps) => {
  const { server } = props

  return (
    <div className="tab-pane active" style={{ marginTop: '4px' }}>
      <div id="row">
        <div className="col-xs-5 s-pad">
          <p>ステータス：{STATUS[server.status]}</p>
          <p style={{ overflowX: 'hidden' }}>開始時刻：----/--/-- --:--:--</p>
          <p style={{ width: '50%', float: 'right' }}>無人時間：--:--:--</p>
          <p>経過時間：--:--:--</p>
          <p>次回予定：</p>
          <a data-toggle="popover" data-html="true" data-placement="right" data-trigger="manual" style={{ width: '120%', cursor: 'pointer' }}>ポート：閉鎖</a>
          <div className="players">
          </div>
        </div>
        <div className="col-sm-7" style={{ maxWidth: '400px', float: 'right', padding: '0' }} data-id={`${server.id}`}>
          <button className="btn btn-primary btn-block bt-one" onClick={props.handleOpenDirectry}>作業フォルダーを開く</button>
          <button className="btn btn-primary btn-block bt-one" onClick={props.handleOpenManageModal}>サーバー/ログ/コマンド履歴/バックアップの管理</button>
          <button className="btn btn-warning bt-two" onClick={props.handleOpenProfileModal} disabled={server.status !== 'stopped'}>プロファイルの編集</button>
          <button className="btn btn-danger bt-two" onClick={props.handleRemoveProfile} disabled={server.status !== 'stopped'}>プロファイルの削除</button>
          <button className="btn btn-info pull-right bt-four" onClick={props.handleRestart} disabled={server.status !== 'running'}>再起動</button>
          <button className="btn btn-danger pull-right bt-four" onClick={props.handleStop} disabled={server.status !== 'running'}>停止</button>
          <button className="btn btn-success pull-right bt-four" onClick={props.handleStart} disabled={server.status !== 'stopped'}>起動</button>
          <button className="btn btn-danger pull-right bt-four" onClick={props.handleKill}>強制終了</button>
        </div>
      </div>
      <ServerLog logs={server.log} />
      <input type="text" disabled={server.status !== 'running'} className="form-control input-sm" placeholder="コマンドを入力..." value="過去ログを表示しています" style={{ display: 'inline-block', width: '89%', margin: '0 0.5%' }} />
      <button disabled={server.status !== 'running'} className="btn btn-primary" style={{ margin: '0 0.5%', width: '9%', padding: '1px', height: '24px' }}>送信</button>
    </div>
  )
}

export default ServerDetail
