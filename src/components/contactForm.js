import * as React from 'react'
import { Input, Button, Textarea, Typography } from '@material-tailwind/react'

const ContactForm = () => {
  return (
    <form
      className="max-w-prose stack stack-lg"
      name="contact"
      method="POST"
      netlify-honeypot="hidden"
      data-netlify="true"
    >
      <div className="stack">
        <input name="hidden" type="hidden" />
        <input
          name="subject"
          type="hidden"
          value="New contact form submission from Sousta website"
        />
        <div>
          <Input size="lg" label="Your Name" name="name" required />
        </div>
        <div>
          <Input
            size="lg"
            label="Your Email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <Textarea size="lg" label="Message" name="message" required />
          <Typography
            variant="small"
            className="flex items-center gap-1 font-normal text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Tell us a little about why you're reaching out.
          </Typography>
        </div>
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  )
}

export default ContactForm
