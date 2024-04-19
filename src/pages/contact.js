import * as React from 'react'
import { graphql } from 'gatsby'
import { Card } from '@material-tailwind/react'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import Seo from '../components/seo'

const ContactPage = ({ data }) => {
  const post = data?.wpPage

  return (
    <Layout>
      <Card className="bg-white p-8 rounded-none shadow-lg stack">
        {post && (
          <>
            <header>
              <h1 className="h2">{post.title}</h1>
            </header>
            <div className="grid gap-8 md:grid-cols-2">
              <div
                className="stack"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <ContactForm />
            </div>
          </>
        )}

        {!post && (
          <>
            <header>
              <h1 className="h2">Contact Sousta</h1>
            </header>
            <ContactForm />
          </>
        )}
      </Card>
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  return <Seo />
}

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDoxOTY2" }) {
      content
      title
    }
  }
`
