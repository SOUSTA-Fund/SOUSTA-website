import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 stack-lg">
        <h1>Posts</h1>
        <ul className="">
          {data.allWpPost.nodes.map((node) => {
            let alt, image
            const hasImage =
              node?.featuredImage?.node?.localFile?.childImageSharp

            if (hasImage) {
              image = getImage(
                node.featuredImage.node.localFile.childImageSharp,
              )
              alt = node.featuredImage.node.altText
            }

            return (
              <li className="max-w-none" key={node.slug}>
                <article className="break-words border-t py-6 stack">
                  <Link to={`/${node.slug}`}>
                    <h2>{node.title}</h2>
                  </Link>
                  <div className="flex flex-col sm:flex-row gap-6">
                    {hasImage && (
                      <Link to={`/${node.slug}`}>
                        <GatsbyImage
                          class="h-72 sm:h-full w-full"
                          image={image}
                          alt={alt}
                        />
                      </Link>
                    )}
                    <div className="justify-between stack">
                      <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      <div>{node.date}</div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog

export const Head = () => {
  return (
    <>
      <title>SOUSTA</title>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { date: DESC }) {
      nodes {
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 200, width: 300)
              }
            }
          }
        }
      }
    }
  }
`
