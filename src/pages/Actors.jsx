import './Actors.css'

const Actors = () => {
  const actors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lead Actress',
      bio: 'Sarah brings over 10 years of theater experience to Sunshine Studio. Her powerful performances and emotional depth have captivated audiences across multiple productions.',
      image: '👩‍🎭',
      highlights: ['Award-winning performer', 'Classical training', 'Passionate storyteller']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Actor',
      bio: 'Michael is known for his versatility and dynamic stage presence. He has starred in numerous productions and brings a unique energy to every role.',
      image: '👨‍🎭',
      highlights: ['Versatile performer', 'Dynamic presence', '15+ productions']
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Supporting Actress',
      bio: 'Emma\'s natural talent and dedication to her craft shine through in every performance. She brings authenticity and warmth to her characters.',
      image: '👩',
      highlights: ['Rising star', 'Natural talent', 'Authentic performances']
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Supporting Actor',
      bio: 'David combines comedic timing with dramatic depth, making him a favorite among audiences. His commitment to character development is unmatched.',
      image: '👨',
      highlights: ['Comedic timing', 'Character depth', 'Audience favorite']
    },
    {
      id: 5,
      name: 'Olivia Martinez',
      role: 'Ensemble',
      bio: 'Olivia brings fresh energy and enthusiasm to the stage. Her passion for theater is evident in every performance, and she\'s quickly becoming a standout talent.',
      image: '👩‍🦰',
      highlights: ['Fresh talent', 'Energetic performer', 'Rapidly growing']
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Ensemble',
      bio: 'James is a dedicated ensemble member who brings strength and harmony to group performances. His attention to detail enhances every production.',
      image: '👨‍🦱',
      highlights: ['Team player', 'Strong vocals', 'Detail-oriented']
    }
  ]

  return (
    <div className="actors-page">
      <div className="actors-hero">
        <div className="container">
          <h1>Meet Our Actors</h1>
          <p>The talented cast bringing our January production to life</p>
        </div>
      </div>

      <div className="container actors-container">
        <section className="cast-intro">
          <p className="intro-text">
            Our cast is comprised of incredibly talented performers who bring passion, 
            dedication, and artistry to every show. Each actor brings their unique 
            perspective and skills to create unforgettable characters and moments on stage.
          </p>
        </section>

        <div className="actors-grid">
          {actors.map(actor => (
            <div key={actor.id} className="actor-card">
              <div className="actor-image">
                <div className="actor-emoji">{actor.image}</div>
              </div>
              <div className="actor-info">
                <h3>{actor.name}</h3>
                <p className="actor-role">{actor.role}</p>
                <p className="actor-bio">{actor.bio}</p>
                <div className="actor-highlights">
                  {actor.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="cast-cta">
          <h2>Experience Their Talent Live</h2>
          <p>Don't miss the opportunity to see these incredible performers on stage this January!</p>
          <a href="/tickets" className="btn btn-primary btn-large">
            Get Your Tickets
          </a>
        </section>
      </div>
    </div>
  )
}

export default Actors

