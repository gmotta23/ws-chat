import * as React from 'react';
import '~/styles/components/Header.scss'

function Header () {
  const text = 'Simple Chat App'

  return (
    <header>
      <div className="title">
        {text}
      </div>
    </header>
  )
}

export default Header;
