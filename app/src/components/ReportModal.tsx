import React, { useState } from 'react'
import useModal from '../hooks/useModal'
import { Dropdown } from './atoms/Form'
import { REPORT_TYPE } from '../constants'

interface ReportModalProps {
  handleClose(): void
}

const ReportModal = (props: ReportModalProps) => {
  const [type, toggleType] = useState('report')

  return useModal(
    <div id="report_modal" className="modal modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={props.handleClose}>&times;</button>
        <h4 className="modal-title">不具合報告/要望</h4>
      </div>
      <div className="modal-body">
        内容:<Dropdown options={REPORT_TYPE} value={type} onChange={value => toggleType(value)} />
        <p id="port_text_h">このレポートには以下のデータが含まれます</p>
        <textarea id="port_text"></textarea>
        <p>できるだけ詳細にお願いします</p>
        <textarea id="report_text"></textarea>
        <p></p>
      </div>
      <div className="modal-footer">
        <button id="report_send" type="button" className="btn btn-primary">送信</button>
        <button type="button" className="btn btn-default" onClick={props.handleClose}>キャンセル</button>
      </div>
    </div>
  )
}

export default ReportModal
