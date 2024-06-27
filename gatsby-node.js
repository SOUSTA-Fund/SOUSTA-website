const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { paginate } = require('gatsby-awesome-pagination')

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

  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  // Create paginated blog pages with urls /blog, /blog/2, etc.
  paginate({
    createPage, // The Gatsby `createPage` function
    items: allPosts, // An array of objects
    itemsPerPage: 6, // How many items you want per page
    pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
    component: slash(blogTemplate), // Just like `createPage()`
  })

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
