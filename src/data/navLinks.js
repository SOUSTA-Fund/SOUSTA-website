import routes from '../routes'

const navLinks = [
  {
    link: routes.about,
    text: 'About',
  },
  {
    link: routes.team,
    text: 'Team',
  },
  {
    link: routes.portfolio,
    text: 'Portfolio',
  },
  {
    link: routes.platforms,
    text: 'Investment Platforms',
  },
  {
    link: routes.blog,
    text: 'Blog',
  },
  {
    link: routes.contact,
    text: 'Contact',
  },
]

export const platforms = [
  {
    link: routes.investmentPlatforms.rwa,
    text: 'Real World Assets',
  },
  {
    link: routes.investmentPlatforms.usStrategy,
    text: 'US Strategy',
  },
]

export default navLinks
