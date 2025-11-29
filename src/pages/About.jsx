import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Sunshine Studio</h1>
          <p>Bringing stories to life through the magic of theater</p>
        </div>
      </div>

      <div className="container about-container">
        <section className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Sunshine Studio was founded with a vision to create extraordinary theater experiences 
              that touch hearts and inspire minds. We believe in the transformative power of live 
              performance and the ability of storytelling to connect people across all walks of life.
            </p>
            <p>
              Since our inception, we have been dedicated to producing high-quality theatrical 
              productions that combine compelling narratives, exceptional talent, and innovative 
              staging. Our commitment to excellence has earned us recognition as one of the 
              premier theater companies in the region.
            </p>
            <p>
              This January, we are thrilled to present our latest production, a carefully crafted 
              piece that showcases the depth of our artistic vision and the passion of our 
              incredible team.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our productions, from casting to staging to performance.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">❤️</div>
              <h3>Passion</h3>
              <p>Our love for theater drives everything we do. We pour our hearts into every show.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌍</div>
              <h3>Community</h3>
              <p>We believe theater brings communities together and creates lasting connections.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">✨</div>
              <h3>Innovation</h3>
              <p>We embrace new ideas and creative approaches to keep theater fresh and exciting.</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Artistic Integrity</h3>
              <p>We maintain the highest standards of artistic integrity in all our work, ensuring that every production is meaningful and authentic.</p>
            </div>
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>We are committed to creating an inclusive environment where everyone feels welcome and represented.</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>We believe that great theater is born from collaboration, and we work closely with our entire team to bring visions to life.</p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>We strive to make theater accessible to all, offering various ticket options and ensuring our venue is welcoming to everyone.</p>
            </div>
          </div>
        </section>

        <section className="team-preview">
          <h2>Our Team</h2>
          <p className="team-intro">
            Sunshine Studio is powered by a dedicated team of artists, technicians, and creative 
            professionals who work tirelessly to bring our productions to life. From our talented 
            actors to our skilled stage crew, every member plays a vital role in creating the 
            magic you see on stage.
          </p>
          <div className="team-cta">
            <a href="/actors" className="btn btn-primary">
              Meet Our Actors
            </a>
          </div>
        </section>

        <section className="achievements-section">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Productions</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">100K+</div>
              <div className="achievement-label">Audience Members</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">25+</div>
              <div className="achievement-label">Awards</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">15+</div>
              <div className="achievement-label">Years of Excellence</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

