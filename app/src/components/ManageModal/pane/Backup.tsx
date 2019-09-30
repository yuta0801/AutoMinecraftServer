import React from 'react'
import { Table, Row } from './style'
import { dummyBuckups } from '../../../dummy'

interface BackupLabelProps {
  title: string
  onClick(): void
}

const BackupLabel = (props: BackupLabelProps) => (
  <a onClick={props.onClick}>{props.title}</a>
)

const Backup = () => (
  <div className="tab-pane in active" id="backup_content">
    { !dummyBuckups.length ? (
      <h3>バックアップはありません</h3>
    ) : (
      <Table header={['日付', '操作']}>
        <Row title={(
          <BackupLabel
            title="全てのバックアップ"
            onClick={() => {
              // TODO: Add open backup folder logic
            }}
          />
        )} onDelete={() => {
          // TODO: Add delete backup logic
        }} />
        { dummyBuckups.map(backup => (
          <Row title={(
            <BackupLabel
              title={backup}
              onClick={() => {
                // TODO: Add open backup folder logic
              }}
            />
          )} onDelete={() => {
            // TODO: Add delete backup logic
          }} onRestore={() => {
            // TODO: Add restore backup logic
          }} />
        )) }
      </Table>
    ) }
  </div>
)

export default Backup
