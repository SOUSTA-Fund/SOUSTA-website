import * as React from 'react'
import { Link } from 'gatsby'
import Logo from './logoWhite'
import routes from '../routes'

export default function FooterLogo() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-blue-200 text-xs">
      <Link to={routes.home} aria-label="Link to home">
        <div className="flex h-12 items-center justify-between w-32">
          <span className="sr-only">SOUSTA</span>
          <Logo />
        </div>
      </Link>
      <div>&copy; {currentYear} SOUSTA</div>
      <div>All Rights Reserved</div>
    </div>
  )
}
