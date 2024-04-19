import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import routes from '../routes'

/**
 * Creates the investment platforms menu item and dropdown.
 * Queries graphql for the investment platform menu items.
 * @param {*}
 * @returns
 */
export default function PlatformsMenu({ link, text }) {
  const data = useStaticQuery(graphql`
    query {
      allWpInvestmentPlatform {
        nodes {
          title
          slug
        }
      }
    }
  `)

  const {
    allWpInvestmentPlatform: { nodes: platforms },
  } = data

  return (
    <Menu allowHover>
      <MenuHandler>
        <Link to={link}>{text}</Link>
      </MenuHandler>
      <MenuList className="bg-blue-50 rounded-none">
        {platforms.map(({ slug, title }) => (
          <MenuItem key={slug} className="bg-transparent">
            <Link to={`${routes.platforms}/${slug}`}>{title}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
