import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';
function Projects() {
  return (
    <div>
      <section className="projects" id="projects">
        <h2 className="heading">My <span>Projects</span>
        </h2>
        <div className="services-container">
            <div className="services-box">
                <FontAwesomeIcon icon={faCode} id="icon"/>
                <h3>Spam comment detection</h3>
                <p> Using tools and technologies such as VS Code, Python, and Machine Learning, I developed an advanced spam comment detection model utilizing the method of Ensembling.
                 By leveraging machine learning, I implemented a robust filtering system that effectively identifies and mitigates spam content. This project demonstrates my expertise 
                 in designing and deploying sophisticated models to distinguish between spam and legitimate messages, enhancing the reliability and efficiency of content moderation systems.</p>
                <a href="#" className='btn'>Read More</a>
            </div>
            <div className="services-box">
            <FontAwesomeIcon icon={faGamepad} id="icon"/>
                <h3>Shooter game</h3>
                <p>Using tools and technologies such as VS Code, Python, and Machine Learning, I developed an advanced spam comment detection model utilizing the method of Ensembling.
                 By leveraging machine learning, I implemented a robust filtering system that effectively identifies and mitigates spam content. This project demonstrates my expertise 
                 in designing and deploying sophisticated models to distinguish between spam and legitimate messages, enhancing the reliability and efficiency of content moderation systems.
                   </p>
                <a href="#" className='btn'>Read More</a>
            </div>
            <div className="services-box">
            <FontAwesomeIcon icon={faReact} id="icon" />
                <h3>Webpage</h3>
                <p> Using tools and technologies such as VS Code, Python, and Machine Learning, I developed an advanced spam comment detection model utilizing the method of Ensembling.
                 By leveraging machine learning, I implemented a robust filtering system that effectively identifies and mitigates spam content. This project demonstrates my expertise 
                 in designing and deploying sophisticated models to distinguish between spam and legitimate messages, enhancing the reliability and efficiency of content moderation systems.</p>
                <a href="#" className='btn'>Read More</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
