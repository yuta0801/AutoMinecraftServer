import React from 'react'

export default function PortModal() {
  return (
    <div id="port_modal" className="modal modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 className="modal-title">ポート開放</h4>
      </div>
      <div className="modal-body">
        <p>手動でポート開放ができます(動作保証外です)</p>
        外部疎通チェックはそのポートを使用するソフトが起動していて、なおかつポート開放が成功している必要があります。<br />
        ポート:<input id="manual_port" className="form-control input-sm" type="number" defaultValue="25565" min="0" max="65535" />
        <button className="btn btn-primary" onClick={() => {/* port_open(undefined, parseInt($('#manual_port').val())); alert('ポート開放を試行しました') */}}>解放</button>
        <button className="btn btn-danger" onClick={() => {/* upnp.portUnmapping({ public: parseInt($('#manual_port').val()) }); alert('ポート閉鎖を試行しました') */}}>閉鎖</button>
        <button id="port_check_manual" className="btn btn-warning" onClick={() => {/* port_check(undefined, parseInt($('#manual_port').val())) */}}>外部疎通チェック</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">閉じる</button>
      </div>
    </div>
  )
}
