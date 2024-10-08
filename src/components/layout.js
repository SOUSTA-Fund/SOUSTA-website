import * as React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import routes from '../routes'
import navLinks from '../data/navLinks'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Layout = ({ children, variant }) => {
  return (
    <div className="d-drawer">
      <input id="drawer" type="checkbox" class="d-drawer-toggle" />
      <div
        className="bg-fixed d-drawer-content flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23bcc1d1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        <Nav />
        <div>
          <main
            className={`mx-auto px-4 pb-24 pt-12 stack stack-2xl md:px-8 ${
              variant === 'wide' ? 'max-w-6xl' : 'max-w-4xl'
            }`}
          >
            {children}
          </main>
        </div>
        <Footer />
      </div>
      <div className="d-drawer-side">
        <label
          for="drawer"
          aria-label="close sidebar"
          class="d-drawer-overlay"
        ></label>
        <div className="bg-white gap-6 p-6 min-h-full stack w-2/3">
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
        </div>
      </div>
    </div>
  )
}

export default Layout
