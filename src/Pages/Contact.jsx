import React from 'react'
import { useState } from 'react'

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    function onChangeName(e) {
        setName(e.target.value)
    }
    function onChangeMessage(e) { // Update the message state with the value from the textarea
        setMessage(e.target.value) // Update the message state with the value from the textarea
    }
    function handleSubmit(e) { // Handle form submission
        e.preventDefault()
        alert(`Thank you, ${name}!\nYour message: ${message} has been sent.`)
        setName('') // Clear the name input field
        setMessage('') // Clear the message textarea
    }
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          {/*Update the name state with the value from the input field which will make it clear when the form is reset */}
          <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={onChangeName} value={name} />   
        </div>
       
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={3} placeholder="Enter your message" onChange={onChangeMessage} value={message}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  )
}
