import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; 2024 by @sunilkr1737 | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
            <a href="#home">
            <FontAwesomeIcon icon={faAngleUp} id='top' />
            </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
