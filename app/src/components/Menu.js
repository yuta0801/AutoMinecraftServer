import React from 'react'

export default function Menu() {
  return (
    <div>
      <div id="menu_button" onClick={() => {/* menu() */}}><a id="menu_title">MENU</a><div id="menu_icon"></div></div>
      <div id="menu" data-show="false" style={{ height: '100%' }}>
        <div className="col-xs-6 s-pad" style={{ height: '100%' }}>
          <h2>最新情報</h2>
          <div className="info" style={{ whiteSpace: 'nowrap', overflow: 'auto', height: '60%', minHeight: '240px' }}>読み込み中...</div>
          <h2 className="update"></h2>
        </div>
        <div className="col-xs-6 s-pad" style={{ height: '100%', overflow: 'auto' }}>
          <h2>新規作成</h2>
          <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#profile_modal">サーバーを新たに作成する</button>
          <div className="drag_area">
            <p className="text-center">使用するフォルダ/Zipファイルをドロップ</p>
            <p className="text-center">または</p>
            <div className="center-block">
              <input type="file" multiple="multiple" style={{ display: 'none' }} />
              <button className="drag_click_file btn btn-primary btn-block">ファイルを選択</button>
              <button className="drag_click_folder btn btn-primary btn-block">フォルダを選択</button>
            </div>
          </div>
          <button className="btn btn-default btn-block" data-toggle="modal" data-target="#port_modal">ポート開放(マニュアル)</button>
          <button className="btn btn-default btn-block" data-toggle="modal" data-target="#settings_modal">設定</button>
          <button className="btn btn-warning btn-block" data-toggle="modal" data-target="#report_modal">不具合/要望</button>
          <button className="btn btn-info btn-block" onClick={() => {/* window.open('http://xperd.net/auto-minecraft-server/') */}}>公式サイトへ</button>
          <button className="reload btn btn-danger btn-block">リフレッシュ</button>
        </div>
      </div>
    </div>
  )
}
