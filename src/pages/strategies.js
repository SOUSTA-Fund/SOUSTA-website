import * as React from 'react'

import { Link, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import routes from '../routes'

const StrategiesPage = ({ data }) => {
  const {
    allWpStrategy: { nodes: strategies },
  } = data

  return (
    <Layout variant={'wide'}>
      <header className="flex justify-center">
        <h1 className="h1">Strategies</h1>
      </header>
      <ul className="grid gap-12 md:grid-cols-2">
        {strategies.map((strategy) => {
          let image, src
          const hasImage =
            strategy?.featuredImage?.node?.localFile?.childImageSharp

          if (hasImage) {
            image = getImage(
              strategy.featuredImage.node.localFile.childImageSharp,
            )
            src = image.images?.fallback?.src
          }

          return (
            <li key={strategy.slug}>
              <Link
                to={`${routes.strategies}/${strategy.slug}`}
                className="flex h-full no-underline"
              >
                <article
                  className="bg-cover bg-no-repeat text-blue-50 transition-all hover:-translate-y-1"
                  style={{ backgroundImage: hasImage ? `url(${src})` : '' }}
                >
                  <div className="bg-blue-900 bg-opacity-80 h-full p-8 stack">
                    <h2 className="h4">{strategy.title}</h2>
                    <p className="">
                      {strategy.strategyFields?.strategyShortDescription}
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

export default StrategiesPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    allWpStrategy {
      nodes {
        title
        slug
        strategyFields {
          strategyShortDescription
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 500)
              }
            }
          }
        }
      }
    }
  }
`
