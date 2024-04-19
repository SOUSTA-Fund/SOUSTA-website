import * as React from 'react'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
    <Layout>
      <Card className="bg-blue-50 p-8 rounded-none shadow-lg stack">
        <header>
          <h1 className="h2">
            Contact <span className="uppercase">Sousta</span>
          </h1>
        </header>
        <form className="max-w-prose stack">
          <div className="stack">
            <div>
              <Typography color="blue-gray" className="">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div>
              <Typography color="blue-gray" className="">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div>
              <Typography color="blue-gray" className="">
                Message
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
          </div>
          <Button className="bg-blue-900 rounded-none text-blue-50">
            Send
          </Button>
        </form>
      </Card>
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  return <Seo />
}
