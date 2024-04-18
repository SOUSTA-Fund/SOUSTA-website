import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { Card } from '@material-tailwind/react'

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]

  return (
    <Layout>
      <article>
        <Card className="p-8 rounded-none shadow-lg stack">
          <header>
            <h1 className="text-3xl">{post.title}</h1>
            <div>{post.date}</div>
          </header>
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
