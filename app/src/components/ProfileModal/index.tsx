import React, { useState } from 'react'
import { Profile } from '../../types'
import { PROFILE_DEFAULT, VERSIONS } from '../../constants'
import useModal from '../../hooks/useModal'
import { Slider, Dropdown } from '../atoms/Form'
import uuid from 'uuid/v4'

interface ProfileModalProps {
  handleSave(profile: Profile): void
  handleClose(): void
  profile?: Profile
  new?: boolean
}

const newProfile = () => ({ id: uuid(), ...PROFILE_DEFAULT })

const ProfileModal = (props: ProfileModalProps) => {
  const [state, setState] = useState(props.profile || newProfile())
  const [versionChange, toggleVersionChange] = useState(props.new || false)
  const [version, toggleVersion] = useState('')

  return useModal(
    <div id="profile_modal" className="modal modal-content">
      <div className="modal-header">
        <button id="profile_modal_close" type="button" onClick={props.handleClose} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 id="profile_edit_title" className="modal-title">プロファイルの編集</h4>
      </div>
      <div id="profile_modal_body" className="modal-body">
        <dl className="dl-horizontal">
          <p id="zip_explain">★保存を押すとZipの解凍が始まります</p>
          <dt>名前 : </dt><dd><input id="id" type="text" /><input id="name" type="text" className="form-control input-sm" value={state.name} onChange={e => setState({ ...state, name: e.target.value })} /></dd>
          <dt>データフォルダ : </dt><dd><input id="folder_input" type="text" className="form-control input-sm left-input" value={state.folder} onChange={e => setState({ ...state, folder: e.target.value })} /><button id="folder_select" type="button" className="btn btn-default right-button">参照</button></dd>
          <dt>jarファイル : </dt><dd><div id="jar_input_div"><input id="jar_input" type="text" className="form-control input-sm left-input" value={state.jar} onChange={e => setState({ ...state, jar: e.target.value })} /><button id="jar_select" type="button" className="btn btn-default right-button">参照</button></div>
            { false && <Dropdown options={[]} value={''} label="必ず選択してください" onChange={() => {}} /> }</dd>
          <dt>最大メモリ : </dt><dd><Slider min={512} max={4096} step={128} className="left-input" value={state.max_memory} onChange={value => setState({ ...state, max_memory: state.min_memory > value ? state.min_memory : value })} />
            <input id="max_memory_text" type="text" className="form-control input-sm right-button" defaultValue="1024MB" value={state.max_memory + 'MB'} onChange={e => setState({ ...state, max_memory: parseInt(e.target.value) })} /></dd>
          <dt>最小メモリ : </dt><dd><Slider min={512} max={4096} step={128} className="left-input" value={state.min_memory} onChange={value => setState({ ...state, min_memory: state.max_memory < value ? state.max_memory : value })} />
            <input id="min_memory_text" type="text" className="form-control input-sm right-button" defaultValue="512MB" value={state.min_memory + 'MB'} onChange={e => setState({ ...state, min_memory: parseInt(e.target.value) })} /></dd>
          <dt>オプション : </dt><dd><label><input id="upnp_check" type="checkbox" checked={state.upnp} onChange={e => setState({ ...state, upnp: e.target.checked })} />UPnPによるポート開放</label><br />
            <div className="row"><div className="col-xs-5"><label><input id="backup_check" type="checkbox" checked={state.backup} onChange={e => setState({ ...state, backup: e.target.checked })} />自動バックアップ</label></div><div className="col-xs-2"><input id="backup_minute" type="number" min="1" className="form-control input-sm" defaultValue="10" value={state.backup_minute} onChange={e => setState({ ...state, backup_minute: e.target.value })} /></div><div className="col-xs-1"> 分毎</div><div className="col-xs-2"><input id="backup_count" type="number" min="1" className="form-control input-sm" defaultValue="5" value={state.backup_count} onChange={e => setState({ ...state, backup_count: e.target.value })} /></div><div className="col-xs-2"> 個まで</div></div></dd>
          <dt>バージョン : </dt>
          { !props.new && <dd><label><input id="change_check" type="checkbox" onChange={e => toggleVersionChange(e.target.checked)} /> Minecraftバージョンを変更</label></dd> }
          { versionChange && (
            <dd>
              <Dropdown options={VERSIONS} value={version} onChange={version => toggleVersion(version)} height={200} />
              <label><input id="latest_check" type="checkbox" />latest(最新版、Forgeのみ)</label>
            </dd>
          ) }
        </dl>
        <div className="progress progress-striped active"><div id="progress" className="progress-bar progress-bar-info"></div></div>
        <p id="progress_text" className="text-right">処理中...(0%)</p>
      </div>
      <div id="profile_modal_footer" className="modal-footer">
        <button id="profile_save" type="button" onClick={() => (props.handleSave(state), props.handleClose())} className="btn btn-primary">保存</button>
        <button type="button" onClick={props.handleClose} className="btn btn-default" data-dismiss="modal">キャンセル</button>
      </div>
    </div>
  )
}

export default ProfileModal
