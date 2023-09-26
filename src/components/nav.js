import * as React from 'react'

import routes from '../routes'
import { Link } from 'gatsby'
import Logo from './logo'

const Nav = () => {
  return (
    <nav className="h-max py-2 wrapper-x z-10">
      <div className="flex items-center justify-between">
        <Link to={routes.home} aria-label="Link to home">
          <div className="flex h-12 items-center w-32">
            <span className="sr-only">SOUSTA</span>
            <Logo />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
