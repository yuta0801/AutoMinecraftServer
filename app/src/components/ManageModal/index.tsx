import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import Properties from './pane/Properties'
import { Tabs, NavTab } from '../atoms/Tabs'

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
        <Tabs current={currentTab} onChange={toggleTab}>
          <NavTab index={0} label="サーバー設定(server.properties)" />
          <NavTab index={1} label="ログファイル" />
          <NavTab index={2} label="コマンド履歴" />
          <NavTab index={3} label="バックアップ復元・削除" />
        </Tabs>
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
