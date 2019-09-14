import React from 'react'
import useModal from '../hooks/useModal'

interface SettingsModalProps {
  handleClose(): void
}

const SettingsModal = (props: SettingsModalProps) => {
  return useModal(
    <div id="settings_modal" className="modal modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={props.handleClose}>&times;</button>
        <h4 className="modal-title">設定</h4>
      </div>
      <div className="modal-body">
        <ul className="nav nav-tabs">
          <li className="active"><a href="#general_settings_content" data-toggle="tab">全般</a></li>
          <li><a href="#log_settings_content" data-toggle="tab">ログ</a></li>
          <li><a href="#backup_settings_content" data-toggle="tab">バックアップ</a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane in active" id="general_settings_content">
            <label><input className="settings_ general" type="checkbox" />----</label>
          </div>
          <div className="tab-pane in" id="log_settings_content">
            <label><input id="log_att" className="settings log" type="checkbox" />[:@～]のようなメッセージを表示</label>
          </div>
          <div className="tab-pane in" id="backup_settings_content">
            <label><input id="backup_notify" className="settings backup" type="checkbox" />バックアップしたことをログで通知</label>
            <label><input id="backup_dir_bool" className="settings backup" type="checkbox" onChange={() => {/* $('#backup_dir, #backup_select').prop('disabled', !$(this).prop('checked')) */}} />指定フォルダーにまとめてバックアップ</label>
            <input id="backup_dir" type="text" className="form-control input-sm left-input settings backup" disabled={true} /><button id="backup_select" type="button" className="btn btn-default right-button" disabled={true}>参照</button>
          </div>
        </div></div>
      <div className="modal-footer">
        <button id="settings_save" type="button" className="btn btn-primary">保存</button>
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={props.handleClose}>キャンセル</button>
      </div>
    </div>
  )
}

export default SettingsModal
