import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Card, CardBody, CardHeader } from '@material-tailwind/react'

const TeamPage = ({ data }) => {
  const team = data?.allWpTeamMember?.nodes
  const sortedTeam = []

  team.forEach((m) => {
    if (m.title === 'Marcus Bourn') sortedTeam[0] = m
    if (m.title === 'Richard Dunn') sortedTeam[1] = m
    if (m.title === 'Douglas Thiessen') sortedTeam[2] = m
    if (m.title === 'Paul Garcia') sortedTeam[3] = m
  })

  return (
    <Layout variant={'wide'}>
      <header className="flex justify-center">
        <h1 className="h1">
          The <span className="uppercase">Sousta</span> Team
        </h1>
      </header>
      {team && (
        <ul className="grid gap-12 md:grid-cols-2">
          {sortedTeam.map((teamMember) => {
            let alt, image
            const hasImage =
              teamMember?.featuredImage?.node?.localFile?.childImageSharp

            if (hasImage) {
              image = getImage(
                teamMember.featuredImage.node.localFile.childImageSharp,
              )
              alt = teamMember.featuredImage.node.altText
            }

            return (
              <li key={teamMember.title} className="stack">
                <article>
                  <Card>
                    <CardHeader className="flex gap-6 m-0 p-0">
                      {image && <GatsbyImage image={image} alt={alt} />}
                      <div>
                        <h2 className="h4">{teamMember.title}</h2>
                        <p className="text-gray-700">
                          {teamMember.teamMemberFields.jobTitle}
                        </p>
                      </div>
                    </CardHeader>
                    <CardBody className="mt-6 p-0">
                      <div
                        dangerouslySetInnerHTML={{ __html: teamMember.content }}
                      />
                    </CardBody>
                  </Card>
                </article>
              </li>
            )
          })}
        </ul>
      )}
    </Layout>
  )
}

export default TeamPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    allWpTeamMember {
      nodes {
        title
        content
        teamMemberFields {
          jobTitle
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FIXED, height: 150, width: 150)
              }
            }
          }
        }
      }
    }
  }
`
