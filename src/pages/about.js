import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <header>
        <h1 className="text-3xl">
          About <span className="uppercase">Sousta</span>
        </h1>
      </header>
      <div className="stack">
        <p>
          SOUSTA is a private equity real estate investment firm committed to
          delivering superior risk-adjusted returns to our investors through the
          use of technology.
        </p>
        <p>
          We are experienced in multiple markets through long lasting
          relationships. SOUSTA manages all aspects of identifying and securing
          assets to purchase as well as the operation of those assets.
        </p>
        <p>
          SOUSTA takes a conservative approach to underwriting combined with a
          proven ability to recognize the Future Value in assets.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  return <Seo />
}
