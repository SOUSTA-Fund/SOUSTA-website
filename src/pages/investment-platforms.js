import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const platforms = []

const PlatformsPage = () => {
  return (
    <Layout>
      <header>
        <h1 className="text-3xl">Investment Platforms</h1>
      </header>
      <ul className="grid gap-8 md:grid-cols-2">
        {platforms.map((platform) => (
          <li key={platform.name} className="relative shadow-lg text-blue-50">
            <img
              src={platform.imageUrl}
              alt=""
              className="absolute h-full left-0 top-0 w-full"
            />
            <div className="bg-blue-900 bg-opacity-80 h-full p-8 relative stack">
              <h2 className="text-2xl font-bold">{platform.name}</h2>
              <p className="">{platform.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default PlatformsPage

export const Head = () => {
  return <Seo />
}
