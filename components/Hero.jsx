import React from 'react'
import { useTypewriter , Cursor} from 'react-simple-typewriter'


export default function Hero() {

  const [text] = useTypewriter({
    words: ['freelanser', 'remote'],
    loop:  {}
  })
  return (
    <section className="section hero" aria-label="home">
    <div className="container">

      <h1 className="h1 hero-title">
      <strong className="strong"> 👋Hey,there.</strong> 
        just blog about web development <div>and <samp className='textwriter'>  {text}</samp></div>
      </h1>

      <div className="wrapper">

        <form action="" className="newsletter-form">
          <input type="email" name="email_address" placeholder="Your email address" className="email-field"/>

          <button type="submit" className="btn">Subscribe</button>
        </form>

        <p className="newsletter-text">
          Get the email newsletter and unlock access to members-only content and updates
        </p>

      </div>

    </div>
  </section>
  )
}
