export const PROFILE_DEFAULT = {
  name: '',
  folder: '',
  jar: '',
  max_memory: 2048,
  min_memory: 512,
  upnp: true,
  backup: true,
  backup_minute: '10',
  backup_count: '5',
}

export const PROPERTIES_DEFAULT = {
  'allow-flight': false,
  'allow-nether': true,
  'broadcast-console-to-ops': true,
  'broadcast-rcon-to-ops': true,
  'announce-player-achievements': true,
  'difficulty': '1',
  'enable-query': false,
  'enable-rcon': false,
  'enable-command-block': false,
  'enable-jmx-monitoring': false,
  'enable-status': true,
  'entity-broadcast-range-percentage': '100',
  'enforce-whitelist': false,
  'force-gamemode': false,
  'function-permission-level': "2",
  'gamemode': '0',
  'generate-structures': true,
  'generator-settings': '',
  'hardcore': false,
  'level-name': 'world',
  'level-seed': '',
  'level-type': 'DEFAULT',
  'max-build-height': '256',
  'max-players': '20',
  'max-tick-time': '',
  'max-world-size': '',
  'motd': 'A Minecraft Server',
  'network-compression-threshold': '',
  'online-mode': true,
  'op-permission-level': '',
  'player-idle-timeout': '',
  'pvp': true,
  'prevent-proxy-connections': false,
  'rate-limit': "0",
  'quert.port': '25565',
  'rcon.password': '',
  'rcon.port': '25575',
  'resource-pack': '',
  'resource-pack-hash': '',
  'server-ip': '',
  'server-name': 'Unknown Server',
  'server-port': '25565',
  'snooper-enabled': true,
  'spawn-animals': true,
  'spawn-monsters': true,
  'spawn-npcs': true,
  'spawn-protection': '',
  'sync-chunk-writes': true,
  'view-distance': '10',
  'white-list': false,
}

export const VERSIONS = [
  'バニラサーバー',
  ...[
    'Vanilla 1.16.2', 'Vanilla 1.16.1',
    'Vanilla 1.16', 'Vanilla 1.15.2', 'Vanilla 1.15.1', 'Vanilla 1.15',
    'Vanilla 1.14.4', 'Vanilla 1.14.3', 'Vanilla 1.14.2', 'Vanilla 1.14.1',
    'Vanilla 1.14', 'Vanilla 1.13.2', 'Vanilla 1.13.1', 'Vanilla 1.13',
    'Vanilla 1.12.2', 'Vanilla 1.12.1', 'Vanilla 1.12', 'Vanilla 1.11.2',
    'Vanilla 1.11.1', 'Vanilla 1.11', 'Vanilla 1.10.2', 'Vanilla 1.10.1',
    'Vanilla 1.10', 'Vanilla 1.9.4', 'Vanilla 1.9.3', 'Vanilla 1.9.2',
    'Vanilla 1.9.1', 'Vanilla 1.9', 'Vanilla 1.8.9', 'Vanilla 1.8.8',
    'Vanilla 1.8.7', 'Vanilla 1.8.6', 'Vanilla 1.8.5', 'Vanilla 1.8.4',
    'Vanilla 1.8.3', 'Vanilla 1.8.2', 'Vanilla 1.8.1', 'Vanilla 1.8',
    'Vanilla 1.7.10', 'Vanilla 1.7.9', 'Vanilla 1.7.5', 'Vanilla 1.7.4',
    'Vanilla 1.7.2', 'Vanilla 1.6.4', 'Vanilla 1.6.2', 'Vanilla 1.6.1',
    'Vanilla 1.5.2', 'Vanilla 1.5.1', 'Vanilla 1.4.7', 'Vanilla 1.4.6',
    'Vanilla 1.4.5', 'Vanilla 1.4.4', 'Vanilla 1.4.2', 'Vanilla 1.3.2',
    'Vanilla 1.3.1', 'Vanilla 1.2.5', 'Vanilla 1.2.4', 'Vanilla 1.2.3',
    'Vanilla 1.2.2', 'Vanilla 1.2.1', 'Vanilla 1.1', 'Vanilla 1.0',
  ].map(version => ({ value: version })),
  'Forgeサーバー',
  ...[
    'Forge 1.16.2', 'Force 1.16.1',
    'Force 1.16', 'Force 1.15.2', 'Force 1.15.1', 'Force 1.15',
    'Force 1.14.4', 'Force 1.14.3', 'Force 1.14.2', 'Force 1.14.1',
    'Force 1.14', 'Force 1.13.2', 'Force 1.13.1', 'Force 1.13',
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
].map((label, index) => ({ label, value: String(index) }))

export const GAMEMODE = [
  'サバイバル', 'クリエイティブ', 'アドベンチャー', 'スペクテイター'
].map((label, index) => ({ label, value: String(index) }))

export const LEVEL_TYPE = [
  { value: 'DEFAULT', label: '通常' },
  { value: 'FLAT', label: 'フラット' },
  { value: 'LARGEBIOMES', label: '大きなバイオーム' },
  { value: 'AMPLIFIED', label: 'アンプリファイド' },
  { value: 'CUSTOMIZED', label: 'カスタマイズ' },
]

export const REPORT_TYPE = [
  { value: 'report', label: '不具合報告' },
  { value: 'port_report', label: '不具合報告(ポート開放)' },
  { value: 'demand', label: '要望' },
]

export const COMMANDS = [
  'achievement', 'ban', 'ban-ip', 'banlist', 'blockdata', 'clear', 'clone',
  'debug', 'defaultgamemode', 'deop', 'difficulty', 'effect', 'enchant',
  'entitydata', 'execute', 'fill', 'gamemode', 'gamerule', 'give', 'help',
  'kick', 'kill', 'list', 'me', 'op', 'pardon', 'pardon-ip', 'particle',
  'playsound', 'replaceitem', 'save-all', 'save-off', 'save-on', 'say',
  'scoreboard', 'seed', 'setblock', 'setidletimeout', 'setworldspawn',
  'spawnpoint', 'spreadplayers', 'stats', 'stop', 'tell', 'tellraw',
  'testfor', 'testforblock', 'testforblocks', 'time', 'title',
  'toggledownfall', 'tp', 'trigger', 'weather', 'whitelist',
  'worldborader', 'xp', 'data', 'advancements', 'attribute', 'bossbar',
  'datapack', 'function', 'forceload', 'reload', 'locate', 'locatebiome',
  'schedule', 'spectate', 'tag', 'team', 'stopsound', 'teleport', 'recipe',
  'loot', 'experience'
]
