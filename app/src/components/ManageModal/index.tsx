import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import Properties from './pane/Properties'

interface ManageModalProps {
  handleClose(): void
}

const ManageModal = (props: ManageModalProps) => {
  const [currentTab, toggleTab] = useState(0)

  return useModal(
    <div id="manage_modal" className="modal modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={props.handleClose}>&times;</button>
        <h4 id="manage_title" className="modal-title">サーバー/ログ/コマンド履歴/バックアップの管理</h4>
      </div>
      <div className="modal-body">
        <ul className="nav nav-tabs">
          <li className="active"><a id="properties_tab" href="#properties_content" onClick={() => toggleTab(0)}>サーバー設定(server.properties)</a></li>
          <li><a id="log_tab" href="#log_content" onClick={() => toggleTab(1)}>ログファイル</a></li>
          <li><a id="command_tab" href="#command_content" onClick={() => toggleTab(2)}>コマンド履歴</a></li>
          <li><a id="backup_tab" href="#backup_content" onClick={() => toggleTab(3)}>バックアップ復元・削除</a></li>
        </ul>
        <div className="tab-content">
          { currentTab === 0 && <Properties /> }
          <div className="tab-pane in" id="log_content">

          </div>
          <div className="tab-pane in" id="command_content">

          </div>
          <div className="tab-pane in" id="backup_content">

          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={props.handleClose}>閉じる</button>
      </div>
    </div>
  )
}

export default ManageModal
