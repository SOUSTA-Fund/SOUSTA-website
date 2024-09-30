import * as React from 'react'

const ContactForm = () => {
  return (
    <form
      className="max-w-prose stack stack-lg"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
    >
      <div className="stack stack-sm">
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="subject"
          type="hidden"
          value="New contact form submission from Sousta website"
        />
        <label className="d-form-control">
          <div className="d-label">
            <span className="d-label-text">
              Name
              <span className="text-red-500"> *</span>
            </span>
          </div>
          <input
            className="d-input d-input-bordered w-full"
            label="Name"
            name="name"
            placeholder="Enter your first name"
            required
            type="text"
          />
        </label>
        <label className="d-form-control">
          <div className="d-label">
            <span className="d-label-text">
              Email
              <span className="text-red-500"> *</span>
            </span>
          </div>
          <input
            className="d-input d-input-bordered w-full"
            label="Email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </label>
        <label className="d-form-control">
          <div className="d-label">
            <span className="d-label-text">
              Message
              <span className="text-red-500"> *</span>
            </span>
          </div>
          <textarea
            className="d-textarea d-textarea-bordered w-full"
            label="Message"
            name="message"
            placeholder="Why are you reaching out today?"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="d-btn bg-blue-900 text-white uppercase hover:bg-yellow-500 hover:text-gray-900"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
