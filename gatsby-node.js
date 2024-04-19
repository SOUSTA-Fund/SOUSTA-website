const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)

  allPosts.forEach((post) => {
    createPage({
      // will be the url for the page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })

  // query content for Investment Platform posts
  const {
    data: {
      allWpInvestmentPlatform: { nodes: allPlatforms },
    },
  } = await graphql(`
    query {
      allWpInvestmentPlatform {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const investmentPlatformTemplate = path.resolve(
    `./src/templates/investment-platform.js`,
  )

  allPlatforms.forEach((platform) => {
    createPage({
      // will be the url for the page
      path: `/investment-platforms/${platform.slug}`,
      // specify the component template of your choice
      component: slash(investmentPlatformTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this platform's data.
      context: {
        id: platform.id,
      },
    })
  })
}
