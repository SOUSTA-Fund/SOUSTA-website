import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]

  return (
    <Layout>
      <article className="stack stack-2xl">
        <header className="stack">
          <h1>{post.title}</h1>
          <div className="text-gray-600 text-sm">{post.date}</div>
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
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
        content
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
