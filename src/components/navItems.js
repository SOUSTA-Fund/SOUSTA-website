import React from 'react'
import { Link } from 'gatsby'
import navLinks from '../data/navLinks'
import useWindowSize from '../hooks/useWindowSize'
import MOBILE_BREAKPOINT from '../data/mobileBreakpoint'
import StrategiesMenu from './strategiesMenu'

export default function NavItems() {
  const windowSize = useWindowSize()

  if (windowSize.width < MOBILE_BREAKPOINT) {
    return
  }

  return (
    <nav id="main-nav">
      <ul className="flex gap-10 text-sm tracking-wide">
        {navLinks.map(({ link, text }, i) => {
          if (text.toLowerCase().includes('strategies')) {
            return (
              <li key={i}>
                <StrategiesMenu link={link} text={text} />
              </li>
            )
          } else {
            return (
              <li key={i}>
                <Link
                  className="py-2 uppercase"
                  activeClassName={'border-b border-gray-900 border-solid'}
                  to={link}
                >
                  {text}
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  )
}
