import React from 'react'
import New from './New'
import News from './News'

export default function Main() {
  return (
    <div id="main">
      <div id="main_left" className="col-xs-4 s-pad">
        {/* <h2>ステータス</h2>
              <table className="table table-hover">
                  <thead><tr><th data-column-id="profile" data-identifier="true">プロファイル名</th><th data-column-id="time">継続時間</th></tr></thead>
                  <tbody id="status">
                  </tbody>
              </table> */}
        <News />
        <New />
      </div>
      <div id="main_right" className="col-xs-8 s-pad">
        <ul id="detail_tab" className="nav nav-tabs" onClick={() => {/* setTimeout(resize, 1) */}}>
        </ul>
        <div id="detail_content" className="tab-content">
          <div>
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
