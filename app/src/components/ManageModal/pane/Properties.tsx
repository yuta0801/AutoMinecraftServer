import React, { useState } from 'react'
import Switch from '../../atoms/Form/Switch'
import { Dropdown, TextInput } from '../style'
import {
  DIFFICULTIES,
  GAMEMODE,
  LEVEL_TYPE,
  PROPERTIES_DEFAULT
} from '../../../constants'

const Properties = () => {
  const [state, setState] = useState(PROPERTIES_DEFAULT)
  const update = <
    K extends keyof typeof PROPERTIES_DEFAULT,
    T extends typeof PROPERTIES_DEFAULT[K]
  >(name: K, value: T) => setState({ ...state, [name]: value })

  return (
    <div className="tab-pane in active" id="properties_content">
      <table className="table table-hover table-condensed manage_table">
        <thead><tr><th data-sortable="false">項目</th><th data-sortable="false">初期値</th><th data-sortable="false">設定</th></tr></thead>
        <tbody>
          <tr><th>飛行許可[allow-flight]</th><th>無効</th><th><Switch value={state['allow-flight']} onChange={value => update('allow-flight', value)} /></th></tr>
          <tr><th>ネザーの有無[allow-nether]</th><th>有効</th><th><Switch value={state['allow-nether']} onChange={value => update('allow-nether', value)} /></th></tr>
          <tr><th>実績が解除させられた時のアナウンス[announce-player-achievements]</th><th>有効</th><th><Switch value={state['announce-player-achievements']} onChange={value => update('announce-player-achievements', value)} /></th></tr>
          <tr><th>難易度[difficulty]</th><th>イージー</th><th><Dropdown options={DIFFICULTIES} value={state['difficulty']} onChange={value => update('difficulty', value)} /></th></tr>
          <tr><th>GameSpy4 protocol serverの許可[enable-query]</th><th>無効</th><th><Switch value={state['enable-query']} onChange={value => update('enable-query', value)} /></th></tr>
          <tr><th>コンソールへのリモート接続の許可[enable-rcon]</th><th>無効</th><th><Switch value={state['enable-rcon']} onChange={value => update('enable-rcon', value)} /></th></tr>
          <tr><th>コマンドブロックの許可[enable-command-block]</th><th>無効</th><th><Switch value={state['enable-command-block']} onChange={value => update('enable-command-block', value)} /></th></tr>
          <tr><th>ゲームモードをログアウトしても維持するか[force-gamemode]</th><th>無効</th><th><Switch value={state['force-gamemode']} onChange={value => update('force-gamemode', value)} /></th></tr>
          <tr><th>ゲームモード[gamemode]</th><th>サバイバル</th><th><Dropdown options={GAMEMODE} value={state['gamemode']} onChange={value => update('gamemode', value)} /></th></tr>
          <tr><th>建物の生成[generate-structures]</th><th>有効</th><th><Switch value={state['generate-structures']} onChange={value => update('generate-structures', value)} /></th></tr>
          <tr><th>スーパーフラットの設定[generator-settings]</th><th></th><th><TextInput type="text" value={state['generator-settings']} onChange={value => update('generator-settings', value)} /></th></tr>
          <tr><th>ハードコアの有無[hardcore]</th><th>無効</th><th><Switch value={state['hardcore']} onChange={value => update('hardcore', value)} /></th></tr>
          <tr><th>ワールドフォルダーの名前[level-name]</th><th>world</th><th><TextInput type="text" value={state['level-name']} onChange={value => update('level-name', value)} /></th></tr>
          <tr><th>ワールド作成時のシード値[level-seed]</th><th></th><th><TextInput type="text" value={state['level-seed']} onChange={value => update('level-seed', value)} /></th></tr>
          <tr><th>ワールド作成時の地形[level-type]</th><th>通常</th><th><Dropdown options={LEVEL_TYPE} value={state['level-type']} onChange={value => update('level-type', value)} /></th></tr>
          <tr><th>ワールドの高さの限界[max-build-height]</th><th>256</th><th><TextInput type="number" value={state['max-build-height']} onChange={value => update('max-build-height', value)} min="0" /></th></tr>
          <tr><th>最大同時接続数[max-players]</th><th>20</th><th><TextInput type="number" value={state['max-players']} onChange={value => update('max-players', value)} min="0" /></th></tr>
          <tr><th>ウォッチドッグを待つ最大時間(ミリ秒)[max-tick-time]</th><th></th><th><TextInput type="number" value={state['max-tick-time']} onChange={value => update('max-tick-time', value)} min="0" /></th></tr>
          <tr><th>最大ワールドサイズ[max-world-size]</th><th></th><th><TextInput type="number" value={state['max-world-size']} onChange={value => update('max-world-size', value)} min="0" /></th></tr>
          <tr><th>サーバーの説明[motd]</th><th>A Minecraft Server</th><th><TextInput type="text" value={state['motd']} onChange={value => update('motd', value)} /></th></tr>
          <tr><th>通信時の圧縮しきい値[network-compression-threshold]</th><th></th><th><TextInput type="text" value={state['network-compression-threshold']} onChange={value => update('network-compression-threshold', value)} /></th></tr>
          <tr><th>ログイン時の認証設定[online-mode]</th><th>有効</th><th><Switch value={state['online-mode']} onChange={value => update('online-mode', value)} /></th></tr>
          <tr><th>OP権限の権限内容[op-permission-level]</th><th></th><th><TextInput type="text" value={state['op-permission-level']} onChange={value => update('op-permission-level', value)} /></th></tr>
          <tr><th>自動kickするタイムアウト時間[player-idle-timeout]</th><th></th><th><TextInput type="number" value={state['player-idle-timeout']} onChange={value => update('player-idle-timeout', value)} min="0" /></th></tr>
          <tr><th>プレイヤー間の攻撃の有無[pvp]</th><th>有効</th><th><Switch value={state['pvp']} onChange={value => update('pvp', value)} /></th></tr>
          <tr><th>GameSpy4 protocol serverのポート[quert.port]</th><th>25565</th><th><TextInput type="number" value={state['quert.port']} onChange={value => update('quert.port', value)} min="0" /></th></tr>
          <tr><th>リモート接続のパスワード[rcon.password]</th><th></th><th><TextInput type="text" value={state['rcon.password']} onChange={value => update('rcon.password', value)} /></th></tr>
          <tr><th>リモート接続のポート[rcon.port]</th><th>25575</th><th><TextInput type="number" value={state['rcon.port']} onChange={value => update('rcon.port', value)} min="0" /></th></tr>
          <tr><th>リソースパックの指定[resource-pack]</th><th></th><th><TextInput type="text" value={state['resource-pack']} onChange={value => update('resource-pack', value)} /></th></tr>
          <tr><th>SHA-1ダイジェストの16進数[resource-pack-hash]</th><th></th><th><TextInput type="text" value={state['resource-pack-hash']} onChange={value => update('resource-pack-hash', value)} /></th></tr>
          <tr><th>バインドするIP[server-ip]</th><th></th><th><TextInput type="text" value={state['server-ip']} onChange={value => update('server-ip', value)} /></th></tr>
          <tr><th>サーバーの名前[server-name]</th><th>Unknown Server</th><th><TextInput type="text" value={state['server-name']} onChange={value => update('server-name', value)} /></th></tr>
          <tr><th>サーバーのポート[server-port]</th><th>25565</th><th><TextInput type="number" value={state['server-port']} onChange={value => update('server-port', value)} min="0" /></th></tr>
          <tr><th>snoopingデータを送信するかどうか[snooper-enabled]</th><th>有効</th><th><Switch value={state['snooper-enabled']} onChange={value => update('snooper-enabled', value)} /></th></tr>
          <tr><th>動物のスポーンの有無[spawn-animals]</th><th>有効</th><th><Switch value={state['spawn-animals']} onChange={value => update('spawn-animals', value)} /></th></tr>
          <tr><th>モンスターのスポーンの有無[spawn-monsters]</th><th>有効</th><th><Switch value={state['spawn-monsters']} onChange={value => update('spawn-monsters', value)} /></th></tr>
          <tr><th>村人のスポーンの有無[spawn-npcs]</th><th>有効</th><th><Switch value={state['spawn-npcs']} onChange={value => update('spawn-npcs', value)} /></th></tr>
          <tr><th>スポーン地点から編集できなくなるブロックの範囲[spawn-protection]</th><th></th><th><TextInput type="text" value={state['spawn-protection']} onChange={value => update('spawn-protection', value)} /></th></tr>
          <tr><th>サーバーで設定するチャンクの制限範囲[view-distance]</th><th>10</th><th><TextInput type="number" value={state['view-distance']} onChange={value => update('view-distance', value)} min="0" /></th></tr>
          <tr><th>ホワイトリストの有効の有無[white-list]</th><th>無効</th><th><Switch value={state['white-list']} onChange={value => update('white-list', value)} /></th></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Properties
