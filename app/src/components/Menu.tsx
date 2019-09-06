import React, { useState, useEffect } from 'react'
import New from './New'
import News from './News'

const Menu = () => {
  const [isOpen, setMenu] = useState(false)

  useEffect(() => {
    const handler = () => {
      const width = document.documentElement.clientWidth
      if (width > 1380) setMenu(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div>
      <div id="menu_button" className={ isOpen ? 'opened' : '' } onClick={() => setMenu(!isOpen)}>
        <a id="menu_title">MENU</a>
        <div id="menu_icon"></div>
      </div>
      { isOpen && (
        <div id="menu" data-show="false">
          <div className="col-xs-6 s-pad">
            <News />
          </div>
          <div className="col-xs-6 s-pad">
            <New />
          </div>
        </div>
      ) }
    </div>
  )
}

export default Menu
