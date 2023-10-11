# SOUSTA Website

## Environment Variables

The app uses a `.env.development` file to store Auth0 variables. The required
variables are:

```sh
AUTH0_DOMAIN=
AUTH0_CLIENTID=
AUTH0_CALLBACK=
AUTH0_REDIRECT_URI=
```

Get the values at https://manage.auth0.com

`AUTH0_REDIRECT_URI` is the url the user will be redirected to after login. It
won't be in the Auth0 management dashboard.
