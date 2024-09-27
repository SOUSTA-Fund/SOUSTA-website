import * as React from 'react'
import { useState } from 'react'
import { Drawer, Button } from '@material-tailwind/react'
import useWindowSize from '../hooks/useWindowSize'
import MOBILE_BREAKPOINT from '../data/mobileBreakpoint'
import { Link } from 'gatsby'
import navLinks from '../data/navLinks'
import Logo from './logo'
import routes from '../routes'

export default function MobileToggle() {
  const windowSize = useWindowSize()
  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  if (windowSize.width >= MOBILE_BREAKPOINT) {
    return
  }

  return (
    <>
      <Button
        className="bg-white text-gray-900 hover:bg-white:"
        variant="text"
        onClick={openDrawer}
        ripple={false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <span className="sr-only">Menu</span>
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="gap-6 p-6 stack">
        <Link to={routes.home} aria-label="Link to home">
          <div className="flex h-12 items-center justify-between w-32">
            <span className="sr-only">SOUSTA</span>
            <Logo />
          </div>
        </Link>
        <nav id="main-nav">
          <ul className="flex flex-col gap-6 text-blue-800 text-lg">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.link}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  )
}
