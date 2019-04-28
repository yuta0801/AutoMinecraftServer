import React from 'react'
import New from './New'
import News from './News'
const { useState } = React

export default function Menu() {
  const [isOpen, setMenu] = useState(false)

  return (
    <div>
      <div id="menu_button" className={ isOpen && 'opened' } onClick={() => setMenu(!isOpen)}>
        <a id="menu_title">MENU</a>
        <div id="menu_icon"></div>
      </div>
      { isOpen && <div id="menu" data-show="false" style={{ height: '100%' }}>
        <div className="col-xs-6 s-pad" style={{ height: '100%' }}>
          <News />
        </div>
        <div className="col-xs-6 s-pad" style={{ height: '100%', overflow: 'auto' }}>
          <New />
        </div>
      </div> }
    </div>
  )
}
