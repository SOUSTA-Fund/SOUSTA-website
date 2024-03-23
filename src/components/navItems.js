import React from 'react'
import { Link } from 'gatsby'
import navLinks from '../data/navLinks'
import useWindowSize from '../hooks/useWindowSize'
import MOBILE_BREAKPOINT from '../data/mobileBreakpoint'
import PlatformsMenu from './platformsMenu'

export default function NavItems() {
  const windowSize = useWindowSize()

  if (windowSize.width < MOBILE_BREAKPOINT) {
    return
  }

  return (
    <nav id="main-nav">
      <ul className="flex gap-6">
        {navLinks.map(({ link, text }, i) => {
          if (text.toLowerCase().includes('investment')) {
            return (
              <li key={i}>
                <PlatformsMenu link={link} text={text} />
              </li>
            )
          } else {
            return (
              <li key={i}>
                <Link to={link}>{text}</Link>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  )
}
