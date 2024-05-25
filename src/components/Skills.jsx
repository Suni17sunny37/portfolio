import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPython} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faLinux} from '@fortawesome/free-brands-svg-icons';
import {faGit} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <div>
      <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>
        <h1 className="tech">Technical skills</h1>
        <div className="tech-bars">
          <div className="bar">
          <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>
{/* ---------------- */}
          <div className="bar">
          <FontAwesomeIcon icon={faPython} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>
{/* ----------------- */}
          <div className="bar">
          <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>
{/* --------------- */}
          <div className="bar">
          <FontAwesomeIcon icon={faDatabase} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>

          
{/* ---------------- */}
          <div className="bar">
          <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>
{/* ---------------- */}
<div className="bar">
          <FontAwesomeIcon icon={faLinux} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>
{/* ---------------- */}
<div className="bar">
          <FontAwesomeIcon icon={faGit} />
          </div>
          <div className="indfo">

          </div>
          <div className="progress-line html">
            <span></span>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Skills
