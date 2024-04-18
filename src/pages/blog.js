import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@material-tailwind/react'

const Blog = ({ data }) => {
  const posts = data?.allWpPost?.nodes

  return (
    <Layout>
      <div className="stack stack-lg">
        <h1 className="text-3xl">Posts</h1>
        {posts && (
          <ul className="grid gap-8 md:grid-cols-2">
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
                  <Link to={`/${post.slug}`} className="no-underline">
                    <article className="break-words">
                      <Card className="rounded-none transition-all hover:-translate-y-1 hover:shadow-lg">
                        {hasImage && (
                          <CardHeader className="m-0 rounded-none shadow-none">
                            <GatsbyImage
                              class="h-72 sm:h-full w-full"
                              image={image}
                              alt={alt}
                            />
                          </CardHeader>
                        )}
                        <CardBody className="stack">
                          <h2 className="text-2xl">{post.title}</h2>

                          <div className="justify-between stack">
                            <div
                              dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            />
                          </div>
                        </CardBody>
                        <CardFooter>
                          <div className="text-gray-600">{post.date}</div>
                        </CardFooter>
                      </Card>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Layout>
  )
}

export default Blog

export const Head = () => {
  return <Seo />
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
