import React from 'react'
import { Table, Row } from './style'
import { dummyLogFiles } from '../../../dummy'

const Log = () => {
  return (
    <div className="tab-pane in active" id="log_content">
      { !dummyLogFiles.length ? (
        <h3>ログファイルはありません</h3>
      ) : (
        <Table header={['ファイル', '操作']}>
          <Row title="すべてのファイル" onDelete={() => {
            // TODO: Add delete all log file logic
          }} />
          { dummyLogFiles.map(log => (
            <Row title={log} onDelete={() => {
              // TODO: Add delete log file logic
            }} />
          )) }
        </Table>
      ) }
    </div>
  )
}

export default Log
