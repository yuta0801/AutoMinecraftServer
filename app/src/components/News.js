import React from 'react'

export default function New() {
  return (
    <div>
      <h2>最新情報</h2>
      <div className="info" style={{ whiteSpace: 'nowrap', overflow: 'auto', height: '60%', minHeight: '240px' }}>読み込み中...</div>
      <h2 className="update"></h2>
    </div>
  )
}
