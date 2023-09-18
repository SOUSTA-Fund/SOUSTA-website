'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex w-full flex-col items-center justify-center py-4 md:flex-row">
          <div className="mb-4 font-normal text-blue-200 text-center text-sm">
            &copy; {currentYear} <a href="/">SOUSTA</a>. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
