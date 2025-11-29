import './Information.css'

const Information = () => {
  return (
    <div className="information-page">
      <div className="info-hero">
        <div className="container">
          <h1>Event Information</h1>
          <p>Everything you need to know about our January theater event</p>
        </div>
      </div>

      <div className="container info-container">
        <section className="info-section">
          <h2>📅 Date & Time</h2>
          <div className="info-card">
            <div className="info-item">
              <strong>Opening Night:</strong>
              <span>January 15, 2024 at 7:00 PM</span>
            </div>
            <div className="info-item">
              <strong>Additional Shows:</strong>
              <span>January 16-20, 2024</span>
            </div>
            <div className="info-item">
              <strong>Matinee Performance:</strong>
              <span>January 18, 2024 at 2:00 PM</span>
            </div>
            <div className="info-item">
              <strong>Duration:</strong>
              <span>Approximately 2 hours (with intermission)</span>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📍 Venue</h2>
          <div className="info-card">
            <div className="venue-details">
              <h3>Sunshine Theater</h3>
              <p>123 Theater Street, Downtown District</p>
              <p>City, State 12345</p>
              <div className="venue-features">
                <div className="feature">
                  <span className="icon">🚗</span>
                  <span>Free Parking Available</span>
                </div>
                <div className="feature">
                  <span className="icon">♿</span>
                  <span>Wheelchair Accessible</span>
                </div>
                <div className="feature">
                  <span className="icon">🍽️</span>
                  <span>Concession Stand Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>🎫 Ticket Information</h2>
          <div className="info-card">
            <div className="ticket-info-grid">
              <div className="ticket-info-item">
                <h4>VIP Tickets</h4>
                <p className="price">$150</p>
                <ul>
                  <li>Premium seating</li>
                  <li>Meet & greet with cast</li>
                  <li>Complimentary refreshments</li>
                  <li>VIP badge</li>
                </ul>
              </div>
              <div className="ticket-info-item">
                <h4>Standard Tickets</h4>
                <p className="price">$75</p>
                <ul>
                  <li>Great seat selection</li>
                  <li>Program booklet</li>
                  <li>Standard access</li>
                </ul>
              </div>
              <div className="ticket-info-item">
                <h4>Student Tickets</h4>
                <p className="price">$45</p>
                <ul>
                  <li>Valid student ID required</li>
                  <li>Program booklet included</li>
                  <li>Student discount pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📋 What to Expect</h2>
          <div className="info-card">
            <div className="expectation-list">
              <div className="expectation-item">
                <div className="expectation-icon">🎭</div>
                <div>
                  <h4>Compelling Storytelling</h4>
                  <p>Experience a powerful narrative brought to life by our talented cast</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-icon">🎨</div>
                <div>
                  <h4>Stunning Set Design</h4>
                  <p>Immerse yourself in beautifully crafted sets and stage design</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-icon">🎵</div>
                <div>
                  <h4>Live Music & Sound</h4>
                  <p>Enjoy original compositions and professional sound design</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-icon">👏</div>
                <div>
                  <h4>Post-Show Q&A</h4>
                  <p>Join us after select performances for a Q&A session with the cast</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📞 Contact & Support</h2>
          <div className="info-card">
            <div className="contact-grid">
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>info@sunshinestudio.com</p>
                <p>tickets@sunshinestudio.com</p>
              </div>
              <div className="contact-item">
                <h4>📱 Phone</h4>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri: 9 AM - 6 PM</p>
              </div>
              <div className="contact-item">
                <h4>💬 Social Media</h4>
                <p>@SunshineStudio</p>
                <p>Follow us for updates</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>⚠️ Important Notes</h2>
          <div className="info-card">
            <ul className="notes-list">
              <li>Doors open 30 minutes before showtime</li>
              <li>Late arrivals may be seated at the discretion of the house manager</li>
              <li>Photography and recording are not permitted during the performance</li>
              <li>All ticket sales are final. Exchanges may be available with 48 hours notice</li>
              <li>Children under 5 are not permitted. Children 5-12 must be accompanied by an adult</li>
              <li>Please arrive early to allow time for parking and seating</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Information

