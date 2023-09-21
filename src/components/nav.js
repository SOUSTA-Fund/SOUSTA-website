import * as React from 'react'

import routes from '../routes'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Nav = () => {
  return (
    <nav className="bg-transparent border-none z-10 h-max max-w-full rounded-none shadow-none px-8 py-2 lg:px-24">
      <div className="flex items-center justify-between">
        <Link to={routes.home}>
          <div className="flex h-12 items-center w-32">
            <StaticImage
              alt="SOUSTA Logo"
              src={'../images/SOUSTA-Logo.svg'}
              width={187}
              height={40}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4"></div>
      </div>
    </nav>
  )
}

export default Nav
