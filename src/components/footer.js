import * as React from 'react'
import FooterLogo from './footerLogo'
import FooterNav from './footerNav'
import Address from './address'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 bottom-0 w-full">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
        <div className="flex w-full flex-wrap gap-10 justify-between py-10 sm:gap-16">
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <FooterLogo />
            <FooterNav />
          </div>

          <Address />
        </div>
      </div>
    </footer>
  )
}

export default Footer
