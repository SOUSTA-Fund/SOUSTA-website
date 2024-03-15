import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <div className="col-span-3 flex flex-col justify-center">
        <h1 className="leading-tight mb-4 text-3xl md:text-5xl">
          Profit From Our Experience
        </h1>
        <p className="text-gray-600 md:text-2xl">
          SOUSTA is a technologically integrated private equity firm whose focus
          is investing in community driven real estate assets.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <Seo />
}
