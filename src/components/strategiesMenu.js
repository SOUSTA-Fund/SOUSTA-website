import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
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
    <Menu allowHover>
      <MenuHandler>
        <Link
          className="py-2"
          activeClassName={'border-b border-gray-900 border-solid'}
          to={link}
        >
          {text}
        </Link>
      </MenuHandler>
      <MenuList className="bg-white rounded-none">
        {strategies.map(({ slug, title }) => (
          <MenuItem key={slug} className="bg-transparent">
            <Link className="no-underline" to={`${routes.strategies}/${slug}`}>
              {title}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
