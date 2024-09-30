import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

export default function StrategyPost({ data }) {
  const post = data.allWpStrategy.nodes[0]

  return (
    <Layout>
      <article className="stack stack-2xl">
        <header>
          <h1>{post.title}</h1>
        </header>
        <div
          className="bg-white stack"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  )
}

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query ($id: String!) {
    allWpStrategy(filter: { id: { eq: $id } }) {
      nodes {
        content
        title
      }
    }
  }
`
