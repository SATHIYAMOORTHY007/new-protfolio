import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import About from './pages/about/Index'
import Home from './pages/home/Index'
import Skill from './pages/skills/Index'
import Projects from './pages/projects/Index'
import Navbar from './pages/navbar/Index'
import particles from './pages/utils.js/particles'
import Contact from './pages/contact/Contact'
import Certificate from './pages/certification/Index'
function App() {
  const handleInit = async (main) => {
    await loadFull(main)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Particles id="particles" options={particles} init={handleInit} />
        <Navbar />

        <div className="App_main_page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificate />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
