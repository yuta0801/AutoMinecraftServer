import React from 'react'

const New = () => {
  return (
    <>
      <h2>新規作成</h2>
      <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#profile_modal">サーバーを新たに作成する</button>
      <div className="drag_area">
        <p className="text-center">使用するフォルダ/Zipファイルをドロップ</p>
        <p className="text-center">または</p>
        <div className="center-block">
          <input type="file" multiple />
          <button className="drag_click_file btn btn-primary btn-block">ファイルを選択</button>
          <button className="drag_click_folder btn btn-primary btn-block">フォルダを選択</button>
        </div>
      </div>
      <button className="btn btn-default btn-block" data-toggle="modal" data-target="#port_modal">ポート開放(マニュアル)</button>
      <button className="btn btn-default btn-block" data-toggle="modal" data-target="#settings_modal">設定</button>
      <button className="btn btn-warning btn-block" data-toggle="modal" data-target="#report_modal">不具合/要望</button>
      <button className="btn btn-info btn-block" onClick={() => {/* window.open('http://xperd.net/auto-minecraft-server/') */}}>公式サイトへ</button>
      <button className="reload btn btn-danger btn-block">リフレッシュ</button>
    </>
  )
}

export default New
