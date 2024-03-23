import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const PortfolioPage = () => {
  return (
    <Layout>
      <header>
        <h1 className="text-3xl">Portfolio</h1>
      </header>
      <div className="stack">
        <p>Coming Soon...</p>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head = () => {
  return <Seo />
}
