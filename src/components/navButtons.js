import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function NavButtons() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div className="flex gap-6">
      {!isAuthenticated && (
        <>
          <button className="button hollow" onClick={loginWithRedirect}>
            Log in
          </button>

          <button
            className="button primary"
            onClick={() =>
              loginWithRedirect({
                authorizationParams: { screen_hint: 'signup' },
              })
            }
          >
            Sign Up
          </button>
        </>
      )}

      {isAuthenticated && (
        <>
          <button
            className="button primary"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </>
      )}
    </div>
  )
}

export default NavButtons
