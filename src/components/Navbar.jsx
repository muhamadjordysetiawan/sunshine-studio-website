import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">☀️ Sunshine Studio</span>
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/tickets" 
              className={isActive('/tickets') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link 
              to="/information" 
              className={isActive('/information') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Information
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/actors" 
              className={isActive('/actors') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Actors
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

