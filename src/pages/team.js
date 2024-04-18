import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TeamPage = ({ data }) => {
  const team = data?.allWpTeamMember?.nodes

  return (
    <Layout>
      <header>
        <h1 className="text-3xl">
          The <span className="uppercase">Sousta</span> Team
        </h1>
      </header>
      {team && (
        <ul className="grid gap-8 md:grid-cols-2">
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
              <li
                key={teamMember.title}
                className="bg-white p-8 shadow-lg stack"
              >
                <div className="flex gap-6">
                  <GatsbyImage
                    className="h-20 rounded-full w-20"
                    image={image}
                    alt={alt}
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{teamMember.title}</h2>
                    <p className="text-gray-600">
                      {teamMember.teamMemberFields.jobTitle}
                    </p>
                  </div>
                </div>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: teamMember.content }}
                />
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
                gatsbyImageData(height: 200, width: 300)
              }
            }
          }
        }
      }
    }
  }
`
