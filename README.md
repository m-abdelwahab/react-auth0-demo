# Authenticating React Apps Using Auth0

[![Netlify Status](https://api.netlify.com/api/v1/badges/73be598f-acd6-4324-aee4-c5d8086ac380/deploy-status)](https://app.netlify.com/sites/react-auth0-demo/deploys)

# Project Setup

1. clone this repo `git clone https://github.com/m-abdelwahab/react-auth0-demo/`
2. run `yarn install`
3. create a .env file in the root of the project with the following:
  1. REACT_APP_AUTH0_DOMAIN = 
  2. REACT_APP_AUTH0_CLIENT_ID = 
4. go to https://auth0.com, create an account and then a new React Application
5. set "Allowed Callback URLs", "Allowed Logout URLs" and "Allowed Web Origins" to http://localhost:3000
6. run `yarn start`
