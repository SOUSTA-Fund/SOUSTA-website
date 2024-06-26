import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Card } from '@material-tailwind/react'

const AboutPage = ({ data }) => {
  const post = data?.wpPage

  return (
    <Layout>
      <article className="stack stack-lg">
        {post && (
          <>
            <header>
              <h1>{post.title}</h1>
            </header>
            <Card className="p-0 rounded-none shadow-none">
              <div
                className="stack"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Card>
          </>
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
