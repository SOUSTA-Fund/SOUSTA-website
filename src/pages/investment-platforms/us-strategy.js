import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Card } from '@material-tailwind/react'

const UsStrategyPage = () => {
  return (
    <Layout>
      <Card className="bg-blue-50 p-8 rounded-none shadow-lg stack">
        <header>
          <h1 className="font-bold text-3xl">U.S. Strategy</h1>
        </header>
        <p>
          <span className="font-bold">
            Elevating Residential Real Estate: SOUSTA&#39;s Richmond, VA
            Strategy Introduction:
          </span>{' '}
          We&#39;re reshaping the landscape of residential real estate in
          Richmond, VA, and its surrounding areas. Our strategy revolves around
          unlocking the full potential of mixed-use, multifamily, and
          single-family properties through a unique blend of value-add
          initiatives and commercial property repurposing, leveraging historical
          tax credits for sustainable growth and community revitalization.
        </p>
        <p>
          <span className="font-bold">Our Vision:</span> At SOUSTA, our vision
          is clear - to enhance rental income for long-term hold while driving
          capital appreciation, all while contributing positively to the
          neighborhoods we invest in.
        </p>
        <h2 className="font-bold text-2xl">Key Elements of Our Strategy:</h2>
        <ol className="stack">
          <li>
            <div className="stack">
              <h3 className="font-bold text-xl">Residential Focus:</h3>
              <p>
                We specialize in residential properties, including mixed-use
                developments, multifamily complexes, and single-family homes.
                Our focus on the residential sector allows us to deeply
                understand the needs and preferences of renters and homeowners
                alike, driving value through tailored solutions.
              </p>
            </div>
          </li>
          <li>
            <div className="stack">
              <h3 className="font-bold text-xl">
                Value-Add and Commercial Property Repurposing:
              </h3>
              <p>
                Our strategy involves a combination of value-add initiatives and
                commercial property repurposing. By strategically renovating and
                repositioning properties, we unlock hidden value and enhance
                their income-generating potential. We leverage historical tax
                credits to facilitate commercial property repurposing projects,
                breathing new life into historic structures while preserving
                their architectural heritage.
              </p>
            </div>
          </li>
          <li>
            <div className="stack">
              <h3 className="font-bold text-xl">
                Geographical Focus: Richmond, VA and Surrounding Areas:
              </h3>
              <p>
                We have a strategic geographical focus on Richmond, VA, and its
                surrounding areas, with particular emphasis on Petersburg. These
                areas offer abundant opportunities for growth and investment,
                supported by favorable demographic trends and economic
                development initiatives.
              </p>
            </div>
          </li>
          <li>
            <div className="stack">
              <h3 className="font-bold text-xl">
                Commitment to Long-Term Hold and Capital Appreciation:
              </h3>
              <p>
                Our goal is not just to generate short-term gains but to build
                sustainable, long- term value for our investors. We prioritize
                assets with strong rental income potential and implement
                strategies aimed at driving capital appreciation over time.
              </p>
            </div>
          </li>
          <li>
            <div className="stack">
              <h3 className="font-bold text-xl">
                Community Engagement and Revitalization:
              </h3>
              <p>
                At SOUSTA, we believe in the importance of community engagement
                and revitalization. We actively seek opportunities to contribute
                positively to the neighborhoods we operate in, fostering
                economic development and improving quality of life for
                residents.
              </p>
            </div>
          </li>
        </ol>
      </Card>
    </Layout>
  )
}

export default UsStrategyPage

export const Head = () => {
  return <Seo />
}
