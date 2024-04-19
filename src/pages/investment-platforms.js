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
        <h1 className="text-3xl">Investment Platforms</h1>
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
            <li key={platform.slug} className="relative shadow-lg text-blue-50">
              <Link
                to={`${routes.platforms}/${platform.slug}`}
                className="no-underline"
              >
                {hasImage && (
                  <GatsbyImage
                    className="absolute h-full left-0 top-0 w-full"
                    image={image}
                    alt={alt}
                  />
                )}
                <div className="bg-blue-900 bg-opacity-80 h-full p-8 relative stack">
                  <h2 className="text-2xl font-bold">{platform.title}</h2>
                  <p className="">
                    {
                      platform.investmentPlatformFields
                        ?.investmentPlatformShortDescription
                    }
                  </p>
                </div>
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
