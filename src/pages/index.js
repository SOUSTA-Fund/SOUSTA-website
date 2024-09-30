import * as React from 'react'
import { graphql, Link } from 'gatsby'
import routes from '../routes'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const page = data?.wpPage

  return (
    <Layout variant={'wide'}>
      <article className="stack stack-2xl">
        {page && (
          <>
            <header>
              <h1 className="lg:text-5xl">{page.title}</h1>
            </header>
            <div
              className="bg-white stack"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex">
                <Link
                  className="bg-white border border-gray-900 font-bold py-3 px-6 no-underline text-gray-900 text-sm transition-all uppercase hover:bg-yellow-500"
                  to={routes.about}
                  aria-label="about"
                >
                  About
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="bg-white border border-gray-900 font-bold py-3 px-6 no-underline text-gray-900 text-sm transition-all uppercase hover:bg-yellow-500"
                  to={routes.team}
                  aria-label="team"
                >
                  Team
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="bg-white border border-gray-900 font-bold py-3 px-6 no-underline text-gray-900 text-sm transition-all uppercase hover:bg-yellow-500"
                  to={routes.strategies}
                  aria-label="strategies"
                >
                  Strategies
                </Link>
              </div>
            </div>
          </>
        )}
      </article>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDoxOTY2" }) {
      content
      title
    }
  }
`
