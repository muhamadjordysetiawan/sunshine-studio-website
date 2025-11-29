import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>☀️ Sunshine Studio</h3>
            <p>Bringing stories to life through the magic of theater.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tickets">Buy Tickets</Link></li>
              <li><Link to="/information">Event Information</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/actors">Our Actors</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@sunshinestudio.com</p>
            <p>Phone: +62 813-2104-6553</p>
            <p>Follow us on social media</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sunshine Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

