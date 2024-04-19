import * as React from 'react'
import routes from '../routes'
import { Link } from 'gatsby'
import Logo from './logo'
import NavItems from './navItems'
import MobileToggle from './mobileToggle'

const Nav = () => {
  return (
    <div className="h-max py-2 w-full z-10">
      <div className="flex items-center justify-between max-w-3xl mx-auto px-4 md:px-8">
        <Link to={routes.home} aria-label="Link to home">
          <div className="flex h-12 items-center justify-between w-32">
            <span className="sr-only">SOUSTA</span>
            <Logo />
          </div>
        </Link>
        <NavItems />
        <MobileToggle />
      </div>
    </div>
  )
}

export default Nav
