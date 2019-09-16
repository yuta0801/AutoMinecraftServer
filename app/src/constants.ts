export const PROFILE_DEFAULT = {
  name: '',
  folder: '',
  jar: '',
  max_memory: 1024,
  min_memory: 512,
  upnp: true,
  backup: true,
  backup_minute: '10',
  backup_count: '5',
}

export const VERSIONS = [
  'バニラサーバー',
  ...[
    'Vanila 1.12.2', 'Vanila 1.12.1', 'Vanila 1.12', 'Vanila 1.11.2',
    'Vanila 1.11.1', 'Vanila 1.11', 'Vanila 1.10.2', 'Vanila 1.10.1',
    'Vanila 1.10', 'Vanila 1.9.4', 'Vanila 1.9.3', 'Vanila 1.9.2',
    'Vanila 1.9.1', 'Vanila 1.9', 'Vanila 1.8.9', 'Vanila 1.8.8',
    'Vanila 1.8.7', 'Vanila 1.8.6', 'Vanila 1.8.5', 'Vanila 1.8.4',
    'Vanila 1.8.3', 'Vanila 1.8.2', 'Vanila 1.8.1', 'Vanila 1.8',
    'Vanila 1.7.10', 'Vanila 1.7.9', 'Vanila 1.7.5', 'Vanila 1.7.4',
    'Vanila 1.7.2', 'Vanila 1.6.4', 'Vanila 1.6.2', 'Vanila 1.6.1',
    'Vanila 1.5.2', 'Vanila 1.5.1', 'Vanila 1.4.7', 'Vanila 1.4.6',
    'Vanila 1.4.5', 'Vanila 1.4.4', 'Vanila 1.4.2', 'Vanila 1.3.2',
    'Vanila 1.3.1', 'Vanila 1.2.5', 'Vanila 1.2.4', 'Vanila 1.2.3',
    'Vanila 1.2.2', 'Vanila 1.2.1', 'Vanila 1.1', 'Vanila 1.0',
  ].map(version => ({ value: version })),
  'Forgeサーバー',
  ...[
    'Forge 1.12.2', 'Forge 1.12.1', 'Forge 1.12', 'Forge 1.11.2', 'Forge 1.11',
    'Forge 1.10.2', 'Forge 1.10', 'Forge 1.9.4', 'Forge 1.9', 'Forge 1.8.9',
    'Forge 1.8.8', 'Forge 1.8', 'Forge 1.7.10', 'Forge 1.7.2', 'Forge 1.6.4',
    'Forge 1.6.3', 'Forge 1.6.2', 'Forge 1.6.1', 'Forge 1.5.2',
    // 'Forge 1.5.1', 'Forge 1.5', 'Forge 1.4.7', 'Forge 1.4.6',
    // 'Forge 1.4.5', 'Forge 1.4.4', 'Forge 1.4.3', 'Forge 1.4.2',
    // 'Forge 1.4.1', 'Forge 1.4.0', 'Forge 1.3.2', 'Forge 1.2.5',
    // 'Forge 1.2.4', 'Forge 1.2.3', 'Forge 1.1',
  ].map(version => ({ value: version })),
]

export const DIFFICULTIES = [
  'ピースフル', 'イージー', 'ノーマル', 'ハード'
].map((label, value) => ({ label, value }))

export const GAMEMODE = [
  'サバイバル', 'クリエイティブ', 'アドベンチャー', 'スペクテイター'
].map((label, value) => ({ label, value }))

export const LEVEL_TYPE = [
  '通常', 'フラット', '大きなバイオーム', 'アンプリファイド', 'カスタマイズ'
].map((label, value) => ({ label, value }))

export const REPORT_TYPE = [
  { value: 'report', label: '不具合報告' },
  { value: 'port_report', label: '不具合報告(ポート開放)' },
  { value: 'demand', label: '要望' },
]
