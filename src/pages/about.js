import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Card } from '@material-tailwind/react'

const AboutPage = ({ data }) => {
  const post = data?.wpPage

  return (
    <Layout>
      <article>
        {post && (
          <Card className="p-8 rounded-none shadow-lg stack stack-lg">
            <header>
              <h1>{post.title}</h1>
            </header>
            <div
              className="stack"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Card>
        )}
      </article>
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDoxOTU5" }) {
      content
      title
    }
  }
`
