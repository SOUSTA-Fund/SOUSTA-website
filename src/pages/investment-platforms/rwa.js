import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const RwaPage = () => {
  return (
    <Layout>
      <header>
        <h1 className="text-2xl">Real World Assets</h1>
      </header>
    </Layout>
  )
}

export default RwaPage

export const Head = () => {
  return <Seo />
}
