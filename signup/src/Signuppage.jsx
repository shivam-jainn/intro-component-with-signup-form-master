import React from 'react'

import Signupform from './components/Signupform'
import Notifpop from './components/Notifpop'
import './landing.css'


const Signuppage = () => {
  return (
    <section className='landing'>

        <div className="left">
            <h1>Learn to code by watching others</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nisi nulla maiores doloremque. Vero quasi sit aspernatur alias quae praesentium voluptatum at, fuga modi laboriosam unde quaerat dolorem eveniet tempore?</p>
        </div>
      
        <div className="right">
          <Notifpop />
            <Signupform />
        </div>
    </section>
  )
}

export default Signuppage