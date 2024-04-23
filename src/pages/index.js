import * as React from 'react'
import { graphql } from 'gatsby'
import Nav from '../components/nav'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const page = data?.wpPage
  const src =
    data?.wpPage?.featuredImage?.node?.localFile?.childImageSharp?.fixed?.src

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="flex flex-col min-h-screen bg-black bg-opacity-60">
        <div className="bg-blue-50">
          <Nav />
        </div>
        <div className="flex flex-1 items-center">
          <main className="max-w-3xl mx-auto px-4 py-24 self-center stack text-lg md:px-8">
            <div className="bg-blue-50 col-span-3 flex flex-col justify-center px-8 py-24 shadow-2xl">
              {page && (
                <>
                  <h1 className="h1 leading-tight mb-4 lg:text-4xl">
                    {page.title}
                  </h1>
                  <div
                    className="stack text-gray-600 md:text-xl"
                    dangerouslySetInnerHTML={{ __html: page.content }}
                  />
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDo3MDE=" }) {
      content
      title
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fixed(height: 900, width: 1600) {
                src
              }
            }
          }
        }
      }
    }
  }
`
