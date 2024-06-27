import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { Card } from '@material-tailwind/react'

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]

  return (
    <Layout>
      <article className="stack stack-2xl">
        <header className="stack">
          <h1>{post.title}</h1>
          <div className="text-gray-600 text-sm">{post.date}</div>
        </header>
        <Card className="p-0 stack">
          <div
            className="stack"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Card>
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
