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
      { isOpen && <div id="menu" data-show="false">
        <div className="col-xs-6 s-pad">
          <News />
        </div>
        <div className="col-xs-6 s-pad">
          <New />
        </div>
      </div> }
    </div>
  )
}
