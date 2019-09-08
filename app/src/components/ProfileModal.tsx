import React, { useState } from 'react'

interface Profile {
  name: string
  folder: string
  jar: string
  max_memory: number
  min_memory: number
  upnp: boolean
  backup: boolean
  backup_minute: string
  backup_count: string
}

interface ProfileModalProps {
  handleSave?(profile: Profile): void
  handleCancel?(): void
  profile: Profile
  new?: boolean
}

const ProfileModal = (props: ProfileModalProps) => {
  const [state, setState] = useState(props.profile)
  const [versionChange, toggleVersionChange] = useState(props.new || false)

  return (
    <div id="profile_modal" className="modal modal-content">
      <div className="modal-header">
        <button id="profile_modal_close" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 id="profile_edit_title" className="modal-title">プロファイルの編集</h4>
      </div>
      <div id="profile_modal_body" className="modal-body">
        <dl className="dl-horizontal">
          <p id="zip_explain">★保存を押すとZipの解凍が始まります</p>
          <dt>名前 : </dt><dd><input id="id" type="text" /><input id="name" type="text" className="form-control input-sm" value={state.name} onChange={e => setState({ ...state, name: e.target.value })} /></dd>
          <dt>データフォルダ : </dt><dd><input id="folder_input" type="text" className="form-control input-sm left-input" value={state.folder} onChange={e => setState({ ...state, folder: e.target.value })} /><button id="folder_select" type="button" className="btn btn-default right-button">参照</button></dd>
          <dt>jarファイル : </dt><dd><div id="jar_input_div"><input id="jar_input" type="text" className="form-control input-sm left-input" value={state.jar} onChange={e => setState({ ...state, jar: e.target.value })} /><button id="jar_select" type="button" className="btn btn-default right-button">参照</button></div>
            <div id="jar_choice_div"><div className="dropdown"><a className="btn btn-default dropdown-toggle" id="jar_choice" data-toggle="dropdown">必ず選択してください<span className="caret"></span></a>
              <ul id="jar_list" className="dropdown-menu" role="menu" aria-labelledby="jar_choice"></ul></div></div></dd>
          <dt>最大メモリ : </dt><dd><input id="max_memory_slider" type="range" min={512} max={4096} step={128} className="custom left-input" value={state.max_memory} onChange={e => setState({ ...state, max_memory: state.min_memory > Number(e.target.value) ? state.min_memory : Number(e.target.value) })} />
            <input id="max_memory_text" type="text" className="form-control input-sm right-button" defaultValue="1024MB" value={state.max_memory + 'MB'} onChange={e => setState({ ...state, max_memory: parseInt(e.target.value) })} /></dd>
          <dt>最小メモリ : </dt><dd><input id="min_memory_slider" type="range" min={512} max={4096} step={128} className="custom left-input" value={state.min_memory} onChange={e => setState({ ...state, min_memory: state.max_memory < Number(e.target.value) ? state.max_memory : Number(e.target.value) })} />
            <input id="min_memory_text" type="text" className="form-control input-sm right-button" defaultValue="512MB" value={state.min_memory + 'MB'} onChange={e => setState({ ...state, min_memory: parseInt(e.target.value) })} /></dd>
          <dt>オプション : </dt><dd><label><input id="upnp_check" type="checkbox" checked={state.upnp} onChange={e => setState({ ...state, upnp: e.target.checked })} />UPnPによるポート開放</label><br />
            <div className="row"><div className="col-xs-5"><label><input id="backup_check" type="checkbox" checked={state.backup} onChange={e => setState({ ...state, backup: e.target.checked })} />自動バックアップ</label></div><div className="col-xs-2"><input id="backup_minute" type="number" min="1" className="form-control input-sm" defaultValue="10" value={state.backup_minute} onChange={e => setState({ ...state, backup_minute: e.target.value })} /></div><div className="col-xs-1"> 分毎</div><div className="col-xs-2"><input id="backup_count" type="number" min="1" className="form-control input-sm" defaultValue="5" value={state.backup_count} onChange={e => setState({ ...state, backup_count: e.target.value })} /></div><div className="col-xs-2"> 個まで</div></div></dd>
          <dt>バージョン : </dt>
          { !props.new && <dd><label><input id="change_check" type="checkbox" onChange={e => toggleVersionChange(e.target.checked)} /> Minecraftバージョンを変更</label></dd> }
          { versionChange && (
            <dd>
              <div className="dropdown"><a className="btn btn-default dropdown-toggle" id="version" data-toggle="dropdown">選択<span className="caret"></span></a>
                <ul id="version_body" className="dropdown-menu" role="menu" aria-labelledby="version">
                  <li role="presentation" className="dropdown-header">バニラサーバー</li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.12.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.12.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.12</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.11.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.11.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.11</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.10.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.10.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.10</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.9.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.9.3</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.9.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.9.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.9</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.9</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.8</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.7</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.6</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.5</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.3</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.8</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.7.10</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.7.9</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.7.5</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.7.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.7.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.6.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.6.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.6.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.5.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.5.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.4.7</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.4.6</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.4.5</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.4.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.4.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.3.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.3.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.2.5</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.2.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.2.3</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.2.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.2.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Vanila 1.0</a></li>
                  <li role="presentation" className="dropdown-header">Forgeサーバー</li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.12.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.12.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.12</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.11.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.11</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.10.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.10</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.9.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.9</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.8.9</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.8.8</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.8</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.7.10</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.7.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.6.4</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.6.3</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.6.2</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.6.1</a></li>
                  <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */ }}>Forge 1.5.2</a></li>
                  {/* <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.5.1</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.5</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.7</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.6</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.5</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.4</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.3</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.2</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.1</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.0</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.3.2</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.2.5</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.2.4</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.2.3</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.1</a></li> */}
                </ul>
              </div>
              <label><input id="latest_check" type="checkbox" />latest(最新版、Forgeのみ)</label>
            </dd>
          ) }
        </dl>
        <div className="progress progress-striped active"><div id="progress" className="progress-bar progress-bar-info"></div></div>
        <p id="progress_text" className="text-right">処理中...(0%)</p>
      </div>
      <div id="profile_modal_footer" className="modal-footer">
        <button id="profile_save" type="button" onClick={() => props.handleSave && props.handleSave(state)} className="btn btn-primary">保存</button>
        <button type="button" onClick={props.handleCancel} className="btn btn-default" data-dismiss="modal">キャンセル</button>
      </div>
    </div>
  )
}

export default ProfileModal
