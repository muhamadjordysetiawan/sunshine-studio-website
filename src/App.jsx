import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Information from './pages/Information'
import About from './pages/About'
import Actors from './pages/Actors'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/information" element={<Information />} />
            <Route path="/about" element={<About />} />
            <Route path="/actors" element={<Actors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

