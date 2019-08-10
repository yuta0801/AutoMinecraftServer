import React from 'react'

const EulaModal = () => {
  return (
    <div id="eula_modal" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title">EULA(使用許諾契約)に同意しますか？</h4>
          </div>
          <div className="modal-body">
            MinecraftのEULAに同意しないとサーバーは立てられません。以下の内容。
                  <div id="eula_div"></div>
            {/* <iframe id="eula_iframe"></iframe> */}
          </div>
          <div className="modal-footer">
            <button id="eula_agree" type="button" className="btn btn-primary">同意する</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EulaModal
