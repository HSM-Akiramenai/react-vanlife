import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
  return (
    <section className='home'>
      <div className='home-overlay'>
        <section className='home-content'>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to={"/vans"}>
            <button className='home-cta-button'>Find your van</button>
          </Link>
        </section>
      </div>
    </section>
  )
}

export default Home