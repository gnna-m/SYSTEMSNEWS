import React, { useState } from 'react'
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [showA, setShowA] = useState(false);

  const [email, setEmail] = useState('');

  const hangleSubmit = (e) =>{
    e.preventDefault()
    setEmail('')
    setShowA(true)
    setTimeout(() => {
      setShowA(false)
    }, 3000);
  }



  return (
    <div className='newsletter-container'>
      <h2>Subscribe for daily insights</h2>
      <h4>Don't miss weekly insights in your hands.</h4>
      
      <form className='newsletter-form'>
        <input type='text' placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)} value={email} />
        <button onClick={hangleSubmit} >Subscribe</button>
      </form>
      {showA ?
        <div className='newsletter-success'>
          <p>Thank you for subscribing!</p>
          <p>You will recieve mail according subscription plan </p>
          <p>hey buddy, Don't miss the mail</p>
        </div>
      :""}
      <p>Terms and conditions apply.Please read those in our official website before subscribing</p>
    </div>
  )
}

export default NewsLetter