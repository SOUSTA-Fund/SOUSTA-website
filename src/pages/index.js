import * as React from 'react'
import Nav from '../components/nav'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1601585144584-2a53183be14c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="flex flex-col min-h-screen bg-black bg-opacity-60">
        <div className="bg-blue-50">
          <Nav />
        </div>
        <div className="flex flex-1 items-center">
          <main className="bg-blue-50 max-w-3xl mx-auto px-4 py-24 self-center shadow-2xl stack text-lg md:px-8">
            <div className="col-span-3 flex flex-col justify-center">
              <h1 className="leading-tight mb-4 text-3xl md:text-5xl">
                Profit From Our Experience
              </h1>
              <p className="text-gray-600 md:text-2xl">
                SOUSTA is a technologically integrated private equity firm whose
                focus is investing in community driven real estate assets.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => {
  return <Seo />
}
