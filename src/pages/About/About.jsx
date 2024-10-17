import React from 'react'
import { Link } from 'react-router-dom';
import "./about.css"
import aboutHero from '../../assets/about-hero.png';

function About() {
  return (
    <article className='about'>
      <section className="about-hero">
          <img src={aboutHero} alt="Van parked at sunset" />
      </section>
      <section className='about-content'>
        <section className='about-header'>
          <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </section>
        <section class="about-highlight">
            <h2>Your destination is waiting.<br />Your van is ready.</h2>
            <Link to="/vans">
              <button className="about-highlight-button">Explore our vans</button>
            </Link>
        </section>
      </section>
    </article>
    )
}

export default About
