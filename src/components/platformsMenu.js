import React from 'react'
import { Link } from 'gatsby'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import { platforms } from '../data/navLinks'

export default function PlatformsMenu({ link, text }) {
  return (
    <Menu allowHover>
      <MenuHandler>
        <Link to={link}>{text}</Link>
      </MenuHandler>
      <MenuList className="bg-blue-50 rounded-none">
        {platforms.map(({ link, text }, i) => (
          <MenuItem key={i} className="bg-transparent">
            <Link to={link}>{text}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
