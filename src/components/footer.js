import * as React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="wrapper-x">
        <div className="flex flex-col items-center justify-center py-4 md:flex-row">
          <div className="text-center text-sm">
            &copy; {currentYear} SOUSTA. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
