'use client'

import routes from '../routes'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="bg-transparent border-none z-10 h-max max-w-full rounded-none shadow-none py-2 px-24">
      <div className="flex items-center justify-between">
        <Link href={routes.home}>
          <div className="flex h-12 items-center relative w-60">
            <Image
              alt="SOUSTA Logo"
              className="absolute right-12"
              src={'/SOUSTA-Logo.svg'}
              width={240}
              height={48}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4"></div>
      </div>
    </nav>
  )
}
