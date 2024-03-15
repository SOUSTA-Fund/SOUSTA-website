import React from 'react'
import { Link } from 'gatsby'
import navLinks from '../data/navLinks'
import useWindowSize from '../hooks/useWindowSize'
import MOBILE_BREAKPOINT from '../data/mobileBreakpoint'

export default function NavItems() {
  const windowSize = useWindowSize()

  if (windowSize.width < MOBILE_BREAKPOINT) {
    return
  }

  return (
    <nav id="main-nav">
      <ul className="flex gap-6">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
