import './Information.css'

const Information = () => {
  return (
    <div className="information-page">
      <div className="info-hero">
        <div className="container">
          <h1>Informasi Acara</h1>
          <p>Semua yang perlu Anda ketahui tentang pagelaran WOF 2.0 2026</p>
        </div>
      </div>

      <div className="container info-container">
        <section className="info-section">
          <h2>📅 Tanggal & Waktu</h2>
          <div className="info-card">
            <div className="info-item">
              <strong>Tanggal Acara:</strong>
              <span>14 Februari 2026</span>
            </div>
            <div className="info-item">
              <strong>Durasi:</strong>
              <span>Kurang lebih 1 jam per pertunjukan</span>
            </div>
            <div className="schedule-section">
              <h3>Jadwal Pertunjukan</h3>
              <div className="schedule-grid">
                <div className="schedule-item">
                  <div className="schedule-header">
                    <span className="show-name">Rapunzel</span>
                    <span className="session-badge">Sesi 1</span>
                  </div>
                  <div className="schedule-time">09.30 WIB</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-header">
                    <span className="show-name">Aladdin</span>
                    <span className="session-badge">Sesi 2</span>
                  </div>
                  <div className="schedule-time">13.00 WIB</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-header">
                    <span className="show-name">Rapunzel</span>
                    <span className="session-badge">Sesi 3</span>
                  </div>
                  <div className="schedule-time">16.00 WIB</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-header">
                    <span className="show-name">Aladdin</span>
                    <span className="session-badge">Sesi 4</span>
                  </div>
                  <div className="schedule-time">19.00 WIB</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📍 Lokasi</h2>
          <div className="info-card">
            <div className="venue-details">
              <h3>Gedung Juang Kota Sukabumi</h3>
              <p>Kota Sukabumi, Jawa Barat</p>
              <div className="maps-container">
                <a
                  href="https://share.google/nvT39zwCrsNqt5AC5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-link"
                >
                  <div className="maps-preview">
                    <div className="maps-icon">📍</div>
                    <div className="maps-text">
                      <span className="maps-title">Lihat Lokasi di Google Maps</span>
                      <span className="maps-subtitle">Klik untuk melihat peta lengkap</span>
                    </div>
                    <div className="maps-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>🎫 Informasi Tiket</h2>
          <div className="info-card">
            <div className="ticket-info-grid">
              <div className="ticket-info-item">
                <h4>Early Bird</h4>
                <p className="price">Rp 30.000</p>
                <span className="status-badge-info sold-out">SOLD OUT</span>
              </div>
              <div className="ticket-info-item">
                <h4>Pre-Sale 1</h4>
                <p className="price">Rp 45.000</p>
                <span className="status-badge-info available">AVAILABLE</span>
              </div>
              <div className="ticket-info-item">
                <h4>Pre-Sale 2</h4>
                <p className="price">Rp 65.000</p>
                <span className="status-badge-info coming-soon">COMING SOON</span>
              </div>
              <div className="ticket-info-item">
                <h4>OTS</h4>
                <p className="price">TBA</p>
                <span className="status-badge-info tba">TO BE ANNOUNCED</span>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📋 Yang Akan Anda Dapatkan</h2>
          <div className="info-card">
            <div className="expectation-list">
              <div className="expectation-item">
                <div className="expectation-icon">🎭</div>
                <div>
                  <h4>Pertunjukan Menakjubkan</h4>
                  <p>Nikmati pertunjukan Rapunzel dan Aladdin yang dibawakan dengan penuh semangat oleh aktor bertalenta</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-icon">🎨</div>
                <div>
                  <h4>Desain Panggung yang Menawan</h4>
                  <p>Rasakan pengalaman imersif dengan set dan desain panggung yang dirancang dengan indah</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-icon">✨</div>
                <div>
                  <h4>Pengalaman Tak Terlupakan</h4>
                  <p>Buat kenangan indah bersama keluarga dan teman dalam pagelaran yang penuh keajaiban</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📞 Kontak & Dukungan</h2>
          <div className="info-card">
            <div className="contact-grid">
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>sunshinestudios@gmail.com</p>
              </div>
              <div className="contact-item">
                <h4>📱 Telepon</h4>
                <p>+62 813-2104-6553</p>
              </div>
              <div className="contact-item">
                <h4>💬 Media Sosial</h4>
                <p>
                  <a 
                    href="https://instagram.com/sunshinestudios.id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-info"
                  >
                    @sunshinestudios.id
                  </a>
                </p>
                <p>Ikuti kami untuk update terbaru</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>✅ Do's and Don'ts</h2>
          <div className="info-card">
            <div className="dos-donts-container">
              <div className="dos-section">
                <h3 className="dos-title">✅ Yang Harus Dilakukan</h3>
                <ul className="dos-list">
                  <li>
                    <span className="list-icon">⏰</span>
                    <span>Datang 10 menit sebelum pertunjukan dimulai</span>
                  </li>
                  <li>
                    <span className="list-icon">🎫</span>
                    <span>Selalu menggunakan gelang tiket selama acara</span>
                  </li>
                  <li>
                    <span className="list-icon">🚶</span>
                    <span>Ikuti flow akses pintu masuk dan keluar sesuai arahan dan mapping dari panitia</span>
                  </li>
                  <li>
                    <span className="list-icon">🗑️</span>
                    <span>Buang sampah pada tempatnya</span>
                  </li>
                  <li>
                    <span className="list-icon">🔒</span>
                    <span>Jaga barang berharga Anda</span>
                  </li>
                </ul>
              </div>
              
              <div className="donts-section">
                <h3 className="donts-title">❌ Yang Tidak Boleh Dilakukan</h3>
                <ul className="donts-list">
                  <li>
                    <span className="list-icon">🚫</span>
                    <span>Tidak membawa senjata tajam dan obat terlarang</span>
                  </li>
                  <li>
                    <span className="list-icon">🚭</span>
                    <span>Merokok di area utama</span>
                  </li>
                  <li>
                    <span className="list-icon">🚗</span>
                    <span>Parkir motor/mobil sembarangan</span>
                  </li>
                  <li>
                    <span className="list-icon">🔇</span>
                    <span>Berisik pada saat pertunjukan berlangsung, kecuali di moment tertentu</span>
                  </li>
                  <li>
                    <span className="list-icon">📸</span>
                    <span>Dilarang menggunakan flash pada saat pertunjukan berlangsung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Information

