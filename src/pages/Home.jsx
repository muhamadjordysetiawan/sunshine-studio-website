import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Sunshine Studio</span>
            <br />
            Presents
          </h1>
          <h2 className="hero-subtitle">World Of Fantasy 2.0</h2>
          <p className="hero-description">
            Datanglah ke pagelaran WOF 2.0 2026 ini untuk merasakan pengalaman yang tak terlupakan!
          </p>
          <div className="hero-buttons">
            <Link to="/tickets" className="btn btn-primary">
              Beli tiket sekarang!
            </Link>
            <Link to="/information" className="btn btn-secondary">
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Kenapa kamu harus datang di pagelaran WOF 2.0 2026 ini?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h3>Pertunjukan yang menakjubkan!</h3>
              <p>Rasakan pertunjukan yang menakjubkan dengan produksi yang telah dirancang dengan baik dan aktor yang bertalenta.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Aktor yang bertalenta!</h3>
              <p>Temui tim aktor yang membawa cerita-cerita kehidupan dengan semangat dan dedikasi.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎪</div>
              <h3>Pengalaman yang tak terlupakan!</h3>
              <p>
                Buat kenangan yang akan selalu tersimpan dalam hati dan pikiranmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Siap merasakan keajaiban?</h2>
            <p>Jangan sampai ketinggalan pagelaran WOF 2.0 2026 ini. Beli tiket sekarang!</p>
            <Link to="/tickets" className="btn btn-primary btn-large">
              Beli tiket sekarang!
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

