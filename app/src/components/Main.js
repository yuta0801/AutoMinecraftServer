import React from 'react'

export default function Main() {
  return (
    <div id="main" style={{ height: 'calc(100%-20px)', padding: '3px 0' }}>
      <div id="main_left" className="col-xs-4 s-pad" style={{ height: '100%', overflowY: 'auto', padding: '0px 5px 5px' }}>
        {/* <h2>ステータス</h2>
              <table className="table table-hover">
                  <thead><tr><th data-column-id="profile" data-identifier="true">プロファイル名</th><th data-column-id="time">継続時間</th></tr></thead>
                  <tbody id="status">
                  </tbody>
              </table> */}
        <h2>最新情報</h2>
        <div className="info" style={{ whiteSpace: 'nowrap', overflow: 'auto', height: '40%' }}>読み込み中...</div>
        <h2 className="update"></h2>
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
      <div id="main_right" className="col-xs-8 s-pad" style={{ height: '100%' }}>
        <ul id="detail_tab" className="nav nav-tabs" onClick={() => {/* setTimeout(resize, 1) */}} style={{ whiteSpace: 'nowrap' }}>
        </ul>
        <div id="detail_content" className="tab-content">
          <div style={{ position: 'absolute', zIndex: '-10', top: '30px', width: '96%', margin: '1%' }}>
            <h1>！サーバーがありません！</h1>
            <p>サーバーを立てるには...</p>
            <p>1. 「サーバーを新たに作成する」をクリック</p>
            <p>2. 名前、minecraftのバージョンを選択</p>
            <p>3. 保存を押すと必要なファイルがダウンロードされ、「起動」をクリックでサーバーを立てられます</p><br />
            <p>既存のデータや配布ワールドから読み込むには...</p>
            <p>1. 「使用するデータを選択」をクリックしてデータを選択するか、データをドラッグ&amp;ドロップ</p>
            <p>2. 使用するjarファイルがあるときは選択。ないときはminecraftのバージョンを選択</p>
            <p>3. 保存を押して、「起動」をクリックすればサーバーが立ち上がります</p>  </div>
        </div>
      </div>
    </div>
  )
}
