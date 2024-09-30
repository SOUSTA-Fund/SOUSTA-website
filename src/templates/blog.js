import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import Seo from '../components/seo'

const Blog = ({ data, pageContext }) => {
  const posts = data?.allWpPost?.nodes

  return (
    <Layout variant={'wide'}>
      <>
        <div className="flex items-baseline justify-center">
          <h1 className="h1">
            <span className="uppercase">Sousta</span> Blog
          </h1>
        </div>
        {posts && (
          <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => {
              let alt, image
              const hasImage =
                post?.featuredImage?.node?.localFile?.childImageSharp

              if (hasImage) {
                image = getImage(
                  post.featuredImage.node.localFile.childImageSharp,
                )
                alt = post.featuredImage.node.altText
              }

              return (
                <li key={post.slug}>
                  <Link
                    to={`/${post.slug}`}
                    className="flex h-full no-underline"
                  >
                    <article className="break-words">
                      <div className="h-full justify-between transition-all hover:-translate-y-1 stack">
                        {hasImage && (
                          <div className="m-0">
                            <GatsbyImage
                              class="h-72 sm:h-full w-full"
                              image={image}
                              alt={alt}
                            />
                          </div>
                        )}
                        <div className="p-0 stack stack-xl">
                          <h2 className="h5">{post.title}</h2>
                          <div className="text-gray-600 text-sm">
                            {post.date}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
        <Pagination pageContext={pageContext} />
      </>
    </Layout>
  )
}

export default Blog

export const Head = () => {
  return <Seo />
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip, sort: { date: DESC }) {
      nodes {
        title
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
