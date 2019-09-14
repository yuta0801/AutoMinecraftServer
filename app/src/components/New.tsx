import React, { useState } from 'react'
import ProfileModal from './ProfileModal'
import ReportModal from './ReportModal'
import PortModal from './PortModal'
import SettingsModal from './SettingsModal'

const New = () => {
  const [showProfileModal, toggleProfileModal] = useState(false)
  const [showReportModal, toggleReportModal] = useState(false)
  const [showPortModal, togglePortModal] = useState(false)
  const [showSettingsModal, toggleSettingsModal] = useState(false)

  return (
    <>
      <h2>新規作成</h2>
      <button className="btn btn-primary btn-block" onClick={() => toggleProfileModal(true)}>サーバーを新たに作成する</button>
      <div className="drag_area">
        <p className="text-center">使用するフォルダ/Zipファイルをドロップ</p>
        <p className="text-center">または</p>
        <div className="center-block">
          <input type="file" multiple />
          <button className="drag_click_file btn btn-primary btn-block">ファイルを選択</button>
          <button className="drag_click_folder btn btn-primary btn-block">フォルダを選択</button>
        </div>
      </div>
      { showProfileModal && <ProfileModal handleClose={() => toggleProfileModal(false)} handleSave={() => {}} new /> }
      <button className="btn btn-default btn-block" onClick={() => togglePortModal(true)}>ポート開放(マニュアル)</button>
      { showReportModal && <ReportModal handleClose={() => toggleReportModal(false)} /> }
      <button className="btn btn-default btn-block" onClick={() => toggleSettingsModal(true)}>設定</button>
      { showPortModal && <PortModal handleClose={() => togglePortModal(false)} /> }
      <button className="btn btn-warning btn-block" onClick={() => toggleReportModal(true)}>不具合/要望</button>
      { showSettingsModal && <SettingsModal handleClose={() => toggleSettingsModal(false)} /> }
      <button className="btn btn-info btn-block" onClick={() => {/* window.open('http://xperd.net/auto-minecraft-server/') */}}>公式サイトへ</button>
      <button className="reload btn btn-danger btn-block">リフレッシュ</button>
    </>
  )
}

export default New
