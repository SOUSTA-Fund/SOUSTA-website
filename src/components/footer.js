import * as React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="absolute bottom-0 w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex w-full flex-col items-center justify-center py-4 md:flex-row">
          <div className="text-center text-sm">
            &copy; {currentYear} SOUSTA. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
