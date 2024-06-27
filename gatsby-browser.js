import '@fontsource/ibm-plex-sans'
import '@fontsource/ibm-plex-sans/400-italic.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-sans/700-italic.css'

import './src/styles/global.css'

// Wrap root element code from:
// https://auth0.com/blog/securing-gatsby-with-auth0/
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from '@material-tailwind/react'
import { navigate } from 'gatsby'
import theme from './src/styles/theme.js'

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || '/', { replace: true })
}

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: process.env.AUTH0_REDIRECT_URI,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <ThemeProvider value={theme}>{element}</ThemeProvider>
    </Auth0Provider>
  )
}
