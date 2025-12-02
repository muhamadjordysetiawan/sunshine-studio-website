import './Actors.css'
import jordyPhoto from '../assets/actors/jordy.jpg'
import keyshaPhoto from '../assets/actors/keysha-zalfa.jpg'
import alyaPhoto from '../assets/actors/alya-zahra.jpg'

const Actors = () => {
  const actors = [
    {
      id: 1,
      name: 'Muhamad Jordy Setiawan',
      image: '👨‍🎭',
      photo: jordyPhoto
    },
    {
      id: 2,
      name: 'Keysha Zalfa',
      image: '👩‍🎭',
      photo: keyshaPhoto
    },
    {
      id: 3,
      name: 'Ebho Ayey',
      image: '👨'
    },
    {
      id: 4,
      name: 'iqbal padma',
      image: '👨‍🦱'
    },
    {
      id: 5,
      name: 'alya zahra',
      image: '👩',
      photo: alyaPhoto
    },
    {
      id: 6,
      name: 'Keyla Digail',
      image: '👩‍🦰'
    }
  ]

  return (
    <div className="actors-page">
      <div className="actors-hero">
        <div className="container">
          <h1>Meet Our Actors</h1>
          <p>Para aktor berbakat yang membawakan pertunjukan Rapunzel dan Aladdin</p>
        </div>
      </div>

      <div className="container actors-container">
        <section className="cast-intro">
          <p className="intro-text">
            Tim aktor kami terdiri dari para performer berbakat yang membawa semangat, 
            dedikasi, dan seni ke setiap pertunjukan. Setiap aktor membawa perspektif 
            dan keahlian unik mereka untuk menciptakan karakter dan momen yang tak terlupakan di panggung.
          </p>
        </section>

        <div className="actors-grid">
          {actors.map(actor => (
            <div key={actor.id} className="actor-card">
              <div className="actor-image">
                {actor.photo ? (
                  <img 
                    src={actor.photo} 
                    alt={actor.name} 
                    className="actor-photo"
                  />
                ) : (
                  <div className="actor-emoji">{actor.image}</div>
                )}
              </div>
              <div className="actor-info">
                <h3>{actor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Actors

