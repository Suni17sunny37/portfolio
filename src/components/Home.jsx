import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import employee from '../employee.png';


function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
            <h3>Hi, Myself</h3>
            <h1>Sunil Kumar</h1>
            <h3>And I'm a <span>Software Developer</span></h3>
            <p> I am enthusiastic about securing a role as a Software Engineer where I can apply my expertise in software
                development, design, and testing to contribute to cutting-edge projects. As a dedicated team player with a
                robust problem-solving mindset, I am passionate about delivering high-quality solutions.
            </p>
            <div className="social-media">
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/kancharla-sunil-kumar-reddy-07a43023a/?trk=opento_sprofile_details"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <a href="#" className='btn'>Download CV</a>
            
        </div>
        <div className="home-img">
                <img src={employee} alt="" />
            </div>
      </section>
    </div>
  )
}

export default Home
