import * as React from 'react'

import routes from '../routes'
import { Link } from 'gatsby'
import Logo from './logo'
import NavButtons from './navButtons'

const Nav = () => {
  return (
    <nav className="absolute h-max px-8 py-2 w-full z-10 lg:px-24">
      <div className="flex items-center justify-between">
        <Link to={routes.home} aria-label="Link to home">
          <div className="flex h-12 items-center justify-between w-32">
            <span className="sr-only">SOUSTA</span>
            <Logo />
          </div>
        </Link>
        <NavButtons />
      </div>
    </nav>
  )
}

export default Nav
