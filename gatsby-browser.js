import '@fontsource/ibm-plex-sans'
import '@fontsource/ibm-plex-sans/400-italic.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-sans/700-italic.css'

import './src/styles/global.css'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import { navigate } from 'gatsby'
import theme from './src/styles/theme.js'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider value={theme}>{element}</ThemeProvider>
}
