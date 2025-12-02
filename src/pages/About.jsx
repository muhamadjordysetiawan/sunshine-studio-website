import './About.css'
// Import foto leadership team
import jamesonPhoto from '../assets/leadership/jameson.jpg'
import wonderkidPhoto from '../assets/leadership/wonderkid.jpg'
import zuluPhoto from '../assets/leadership/zulu.jpg'
// Import foto team members
import ezapPhoto from '../assets/team/ezap.jpg'
import arasmythPhoto from '../assets/team/arasmyth.jpg'
import fikriPhoto from '../assets/team/fikri.jpg'
import zilongPhoto from '../assets/team/zilong.jpg'

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
              Sunshine Studios adalah komunitas seni yang berfokus pada pertunjukan kabaret dan produksi kreatif. 
              Dikenal karena tata artistik yang detail, koreografi penuh energi, dan kepekaan visual yang tinggi. 
              Sunshine Studios lahir dari semangat muda untuk menciptakan karya yang tidak hanya indah, tetapi juga bermakna.
            </p>
            <p>
              Sebuah teater dengan sejarah panjang, berakar pada tradisi seni pertunjukan dan pendidikan karakter. 
              Lebih dari empat dekade berkarya, Teater Epigonen terus menjadi ruang bagi generasi muda untuk belajar, 
              berekspresi, dan menciptakan karya yang menggugah rasa.
            </p>
            <p>
              World of Fantasy 2.0 hadir sebagai perayaan dari imajinasi, sebuah lanjutan dari kisah yang telah 
              menghidupkan ribuan rasa pada edisi sebelumnya. Kali ini, kami ingin membawa penonton masuk lebih jauh 
              ke dalam semesta fantasi — dunia tempat warna, emosi, dan cerita berpadu menjadi satu pengalaman yang memukau.
            </p>
            <p>
              Pagelaran ini bukan hanya pertunjukan. Ia adalah perjalanan emosional, ruang ekspresi, dan wadah untuk 
              merayakan seni pertunjukan dalam wujud paling magisnya.
            </p>
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

        <section className="leadership-section">
          <h2>Leadership Team</h2>
          <div className="leadership-grid">
            <div className="leader-card featured">
              <div className="leader-image">
                <img src={jamesonPhoto} alt="Jameson - CEO" className="leader-photo" />
              </div>
              <div className="leader-info">
                <h3>Jameson</h3>
                <p className="leader-role">CEO</p>
                <p className="leader-name">Muhammad Reyhand Alfarrel</p>
              </div>
            </div>

            <div className="leader-card featured">
              <div className="leader-image">
                <img src={wonderkidPhoto} alt="WonderKid - Creative Director" className="leader-photo" />
              </div>
              <div className="leader-info">
                <h3>WonderKid</h3>
                <p className="leader-role">Creative Director</p>
                <p className="leader-name">Nizar Anditia Kurniawan</p>
              </div>
            </div>

            <div className="leader-card featured">
              <div className="leader-image">
                <img src={zuluPhoto} alt="Zulu - Art Director" className="leader-photo" />
              </div>
              <div className="leader-info">
                <h3>Zulu</h3>
                <p className="leader-role">Art Director</p>
                <p className="leader-name">Muhammad Zhafira Pemangku Rahmat</p>
              </div>
            </div>
          </div>
        </section>

        <section className="other-team-section">
          <h2>Team</h2>
          <div className="other-team-grid">
            <div className="team-member-card">
              <div className="team-member-image">
                <img src={ezapPhoto} alt="Ezap" className="team-member-photo" />
              </div>
              <h4>Ezap</h4>
            </div>
            <div className="team-member-card">
              <div className="team-member-image">
                <img src={arasmythPhoto} alt="Arasmyth" className="team-member-photo" />
              </div>
              <h4>Arasmyth</h4>
            </div>
            <div className="team-member-card">
              <div className="team-member-image">
                <img src={fikriPhoto} alt="Fikri" className="team-member-photo" />
              </div>
              <h4>Fikri</h4>
            </div>
            <div className="team-member-card">
              <div className="team-member-image">
                <img src={zilongPhoto} alt="Zilong" className="team-member-photo" />
              </div>
              <h4>Zilong</h4>
            </div>
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

