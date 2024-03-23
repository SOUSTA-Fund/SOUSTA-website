import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const team = []

const TeamPage = () => {
  return (
    <Layout>
      <header>
        <h1 className="text-3xl">
          The <span className="uppercase">Sousta</span> Team
        </h1>
      </header>
      <ul className="grid gap-8 md:grid-cols-2">
        {team.map((member) => (
          <li key={member.name} className="bg-blue-50 p-8 shadow-lg stack">
            <div className="flex gap-6">
              <StaticImage
                src="../images/team/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                alt={member.name}
                className="rounded-full"
                placeholder="blurred"
                layout="constrained"
                width={100}
                height={100}
              />
              <div>
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
            <p className="text-gray-600">{member.bio}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TeamPage

export const Head = () => {
  return <Seo />
}
