import * as React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import MOBILE_BREAKPOINT from '../data/mobileBreakpoint'

export default function MobileToggle() {
  const windowSize = useWindowSize()

  if (windowSize.width >= MOBILE_BREAKPOINT) {
    return
  }

  return (
    <>
      <label
        aria-label="open sidebar"
        className="bg-white px-6 py-3 text-gray-900 hover:bg-white:"
        for="drawer"
        variant="text"
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
      </label>
    </>
  )
}
