import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]

  return (
    <Layout>
      <article className="max-w-3xl mx-auto post px-4 md:px-8 stack-lg">
        <h1>{post.title}</h1>
        <div
          className="stack"
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
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`
