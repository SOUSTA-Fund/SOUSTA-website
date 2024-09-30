import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => {
  const post = data?.wpPage

  return (
    <Layout>
      <article className="stack stack-2xl">
        {post && (
          <>
            <header>
              <h1>{post.title}</h1>
            </header>
            <div
              className="bg-white stack"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
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
    wpPage(id: { eq: "cG9zdDoxOTY5" }) {
      content
      title
    }
  }
`
