import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import routes from '../routes'

/**
 * Creates the strategies menu item and dropdown.
 * Queries graphql for the strategy menu items.
 * @param {*}
 * @returns
 */
export default function StrategiesMenu({ link, text }) {
  const data = useStaticQuery(graphql`
    query {
      allWpStrategy {
        nodes {
          title
          slug
        }
      }
    }
  `)

  const {
    allWpStrategy: { nodes: strategies },
  } = data

  return (
    <ul className="d-dropdown d-dropdown-hover">
      <li role="button">
        <Link
          className="py-2 uppercase"
          activeClassName={'border-b border-gray-900 border-solid'}
          to={link}
        >
          {text}
        </Link>
      </li>
      <ul className="bg-white d-menu d-dropdown-content shadow w-52">
        {strategies.map(({ slug, title }) => (
          <li key={slug} className="bg-transparent">
            <Link className="no-underline" to={`${routes.strategies}/${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  )
}
