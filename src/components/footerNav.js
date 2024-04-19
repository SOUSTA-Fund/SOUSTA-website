import * as React from 'react'
import { Link } from 'gatsby'
import navLinks from '../data/navLinks'

export default function FooterNav() {
  return (
    <nav>
      <div className="flex flex-col text-blue-50 text-sm">
        {navLinks.map((link, i) => (
          <Link key={i} to={link.link}>
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}
