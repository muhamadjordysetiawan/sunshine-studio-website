import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Tickets = lazy(() => import('./pages/Tickets'))
const Information = lazy(() => import('./pages/Information'))
const About = lazy(() => import('./pages/About'))
const Actors = lazy(() => import('./pages/Actors'))

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '50vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'var(--yellow)'
  }}>
    <div>Loading...</div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/information" element={<Information />} />
              <Route path="/about" element={<About />} />
              <Route path="/actors" element={<Actors />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

