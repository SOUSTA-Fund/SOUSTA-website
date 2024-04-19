import * as React from 'react'

import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import routes from '../routes'

const PlatformsPage = ({ data }) => {
  const {
    allWpInvestmentPlatform: { nodes: platforms },
  } = data

  return (
    <Layout>
      <header>
        <h1 className="h1">Investment Platforms</h1>
      </header>
      <ul className="grid gap-8 md:grid-cols-2">
        {platforms.map((platform) => {
          let alt, image
          const hasImage =
            platform?.featuredImage?.node?.localFile?.childImageSharp

          if (hasImage) {
            image = getImage(
              platform.featuredImage.node.localFile.childImageSharp,
            )
            alt = platform.featuredImage.node.altText
          }

          return (
            <li key={platform.slug}>
              <Link
                to={`${routes.platforms}/${platform.slug}`}
                className="flex h-full no-underline"
              >
                <article className="relative shadow-md text-blue-50 transition-all hover:-translate-y-1 hover:shadow-lg">
                  {hasImage && (
                    <GatsbyImage
                      className="absolute h-full left-0 top-0 w-full"
                      image={image}
                      alt={alt}
                    />
                  )}
                  <div className="bg-blue-900 bg-opacity-80 h-full p-8 relative stack">
                    <h2>{platform.title}</h2>
                    <p className="">
                      {
                        platform.investmentPlatformFields
                          ?.investmentPlatformShortDescription
                      }
                    </p>
                  </div>
                </article>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default PlatformsPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    allWpInvestmentPlatform {
      nodes {
        title
        slug
        investmentPlatformFields {
          investmentPlatformShortDescription
        }
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
