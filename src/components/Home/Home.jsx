import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {

    return (
      <div className="home-page-container">
          
          <div className="space-text-container">
            <h3 className='space-text-header'>So, you want to travel to</h3>
            <h1 className='space-text-title'>space</h1>
            <p className='space-text-description'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="button-conatiner">
            <Link className='explore-link'  to='/destination' >explore</Link>
          </div>
      </div>
    )
}

export default Home
