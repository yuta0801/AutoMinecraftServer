import React from 'react'

export default function ReportModal() {
  return (
    <div id="report_modal" className="modal modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 className="modal-title">不具合報告/要望</h4>
      </div>
      <div className="modal-body">
        内容:<div className="dropdown"><a className="btn btn-default dropdown-toggle" id="report_type" data-toggle="dropdown">不具合報告<span className="caret"></span></a>
          <ul id="report_type_select" className="dropdown-menu" role="menu" aria-labelledby="report_type">
            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">不具合報告</a></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">不具合報告(ポート開放)</a></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">要望</a></li>
          </ul></div>
        <p id="port_text_h">このレポートには以下のデータが含まれます</p>
        <textarea id="port_text"></textarea>
        <p>できるだけ詳細にお願いします</p>
        <textarea id="report_text"></textarea>
        <p></p>
      </div>
      <div className="modal-footer">
        <button id="report_send" type="button" className="btn btn-primary">送信</button>
        <button type="button" className="btn btn-default" data-dismiss="modal">キャンセル</button>
      </div>
    </div>
  )
}
