import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Card } from '@material-tailwind/react'

const AboutPage = ({ data }) => {
  const post = data?.wpPage

  return (
    <Layout>
      {post && (
        <Card className="p-8 rounded-none shadow-lg stack">
          <header>
            <h1 className="text-3xl">{post.title}</h1>
          </header>
          <div
            className="stack"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Card>
      )}
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDoy" }) {
      content
      title
    }
  }
`
