import React from 'react'
import { Table, Row } from './style'
import { COMMANDS } from '../../../constants'

const Command = () => (
  <div className="tab-pane in active" id="command_content">
    <Table header={['コマンド', '操作']}>
      <Row title="全ての履歴" onDelete={() => {
        // Add delete all commands indices logic
      }} />
      { COMMANDS.map(command => (
        <Row title={command} onDelete={() => {
          // Add delete command indices logic
        }} />
      )) }
    </Table>
  </div>
)

export default Command
