import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Card, CardBody, CardHeader } from '@material-tailwind/react'

const TeamPage = ({ data }) => {
  const team = data?.allWpTeamMember?.nodes

  return (
    <Layout>
      <header className="flex justify-center">
        <h1 className="h1">
          The <span className="uppercase">Sousta</span> Team
        </h1>
      </header>
      {team && (
        <ul className="grid gap-12 md:grid-cols-2">
          {team.map((teamMember) => {
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
                      <GatsbyImage
                        className="h-20 w-20"
                        image={image}
                        alt={alt}
                      />
                      <div>
                        <h2 className="h5">{teamMember.title}</h2>
                        <p>{teamMember.teamMemberFields.jobTitle}</p>
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
                gatsbyImageData(layout: FIXED, height: 90, width: 90)
              }
            }
          }
        }
      }
    }
  }
`
