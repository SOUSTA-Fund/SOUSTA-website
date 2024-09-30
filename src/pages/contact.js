import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import Seo from '../components/seo'

const ContactPage = ({ data }) => {
  const post = data?.wpPage

  return (
    <Layout variant={'wide'}>
      {post && (
        <>
          <header className="flex justify-center">
            <h1 className="h1">{post.title}</h1>
          </header>
          <div className="bg-white stack">
            <div className="grid gap-8 md:grid-cols-2">
              <div
                className="stack"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <ContactForm />
            </div>
          </div>
        </>
      )}

      {!post && (
        <>
          <header>
            <h1 className="h2">Contact Sousta</h1>
          </header>
          <div className="bg-white stack">
            <ContactForm />
          </div>
        </>
      )}
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDoxOTcy" }) {
      content
      title
    }
  }
`
