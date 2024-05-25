import React from 'react'
import MyPhoto from '../Images/My-Photo.jpeg';
import working from '../working.png'
function About() {
  return (
    <div>
      <section className="about" id="about">
            <div className="about-img">
            <img src={working} alt="" />
            </div>
            <div className="about-content">
                <h2 className="heading">
                    About <span>Me</span>
                </h2>
                <h3>Frontend Developer</h3>
                <p>I am enthusiastic about securing a role as a Software Engineer where I can apply my expertise in software
                development, design, and testing to contribute to cutting-edge projects. As a dedicated team player with a
                robust problem-solving mindset, I am passionate about delivering high-quality solutions.
                </p>
                <a href="#" className="btn">Read more</a>
            </div>
      </section>
    </div>
  )
}

export default About;
